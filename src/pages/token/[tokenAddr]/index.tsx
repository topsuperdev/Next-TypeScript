import { GetServerSidePropsContext } from "next";
import React, { FC, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { logPageview } from "src/utils/ga";
import TokenProfile from "src/components/token/profile";
import TokenAddressRenderer from "src/components/ag-grid-renderers/token-address";

interface Props {
  tokenAddr: string;
}

const TokenPage: FC<Props> = (props) => {
  const { tokenAddr } = props;

  logPageview(`token ${tokenAddr}`);

  const [token, setToken] = useState<Solana.SolanaToken | null>(null);

  useEffect(() => logPageview(`token page`), []);

  useEffect(() => {
    async function getAndSet() {
      try {
        const res = await fetch(
          `https://ouo4ylg48g.execute-api.us-east-2.amazonaws.com/prod/token/${tokenAddr}`
        );
        const tt = await res.json();
        const token = tt && tt["token"];
        if (token) setToken(token);
      } catch(error: any) {
        throw new Error(`Error | Pages - Token - TokenAddr | ${error?.message}`);
      }
    }

    getAndSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inner = token ? (
    <>
      <div className="flex mt-2 mb-3">
        {/* <div className="flex-initial">
              <Image className="rounded" src="https://pbs.twimg.com/profile_images/1451369598805229568/7PWvrpIe_400x400.png" height={64} width={64} />
            </div> */}
        <div className="flex-initial -mt-1 ml-2">
          <h1 className="text-left text-4xl font-bold text-primary-dark">{token.name}</h1>
          <div className="text-sm text-primary-dark">
            {TokenAddressRenderer({ value: token.tokenAddr })}
          </div>
        </div>
      </div>
      <TokenProfile token={token} />
    </>
  ) : (
    <div className="p-3">
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    </div>
  );

  return (
    <main
      className="pt-2 w-full mx-auto px-3 relative min-h-screen"
    >
      <Container className="pt-16 pb-4">{inner}</Container>
    </main>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { tokenAddr } = context.query;
  return { props: { tokenAddr } };
}

export default TokenPage;

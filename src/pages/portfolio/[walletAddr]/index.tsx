import { GetServerSidePropsContext } from "next";
import React, { FC } from "react";
import PortfolioModule from "src/components/modules/Portfolio";

interface Props {
  walletAddr: string;
}

const PortfolioPage: FC<Props> = ({ walletAddr }) => {
  return (
    <PortfolioModule walletAddr={walletAddr} />
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { walletAddr } = context.query;
  return { props: { walletAddr } };
}

export default PortfolioPage;

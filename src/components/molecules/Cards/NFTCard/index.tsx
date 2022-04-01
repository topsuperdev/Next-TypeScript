import React, { FC } from "react";
import { Card } from "react-bootstrap";
import { ExchangeBadge, UnlistedBadge } from "src/components/atoms/Badges";
// import Link from 'next/link'

interface Props {
  item: Solana.SolanaToken;
  onClickDetails: (token: Solana.SolanaToken) => void;
}

const NTFCard: FC<Props> = ({ item, onClickDetails }) => {
  // https://tailwindgrids.com/#/
  return (
    <div className="cursor-pointer px-1 mb-2 w-full overflow-hidden sm:w-1/2 md:w-1/4 lg:w-1/5">
      {/* <Link href={`/nft/${listing.token_add}`}> */}
      <Card
        className="mx-auto border-grey rounded-md border-l shadow-sm bg-background-color w-full"
        onClick={() => onClickDetails(item)}
      >
        {item.centralizedStorageImageUrl &&
          item.centralizedStorageImageUrl.startsWith("https://") ? (
          <Card.Img
            variant="top"
            src={item.JasesThumbnailImageUrl || item.centralizedStorageImageUrl}
            style={{
              height: "250px",
              minHeight: "250px",
              overflowY: "hidden",
            }}
          />
        ) : (
          <div
            style={{
              height: "250px",
              minHeight: "250px",
              overflowY: "hidden",
            }}
          ></div>
        )}
        <Card.Body className="border-t-2">
          <Card.Title
            className="text-left text-sm font-bold text-primary-dark whitespace-nowrap overflow-hidden h-6 text-ellipsis"
          >
            {item.name}
          </Card.Title>
          <Card.Text className="text-left">
            {item?.mostRecentTxn?.exchange ? (
              <span>
                <span className="text-primary-dark">Listed for sale on{" "}</span>
                <ExchangeBadge exchangeName={item?.mostRecentTxn?.exchange} />
              </span>
            ) : (
              <UnlistedBadge />
            )}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      {/* </Link> */}
    </div>
  );
};

export default NTFCard;

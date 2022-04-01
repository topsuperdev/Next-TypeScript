import React from "react";
import Image from "next/image";
import { getTokenImg } from "src/utils/token";
import { images as nextConfigImages } from "next.config";

export interface IThumbnailRendererProps {
  value: any;
  data: Solana.SolanaToken;
}

function ThumbnailRenderer({ data }: IThumbnailRendererProps) {
  const tokenImg = getTokenImg(data);
  return (
    <div className="flex items-center pl-2">
      {nextConfigImages?.domains?.some((d) => tokenImg.startsWith(d)) ? (
        <Image
          alt={data.name}
          className="rounded"
          height={50}
          width={50}
          src={getTokenImg(data)}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="rounded"
          src={tokenImg}
          alt={data.name}
          width={50}
          height={50}
        />
      )}
      <div className="ml-10 font-bold">{data.name}</div>
    </div>
  );
}

export default ThumbnailRenderer;

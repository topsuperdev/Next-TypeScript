import React from "react";
import Image from "next/image";

type LayoutValue = "fill" | "fixed" | "intrinsic" | "responsive" | undefined;

export interface ImageProps extends JasesCommon.BaseProps {
  /**
   * Source of Image
   */
  src: string;
  /**
   * Alternate Text of Image
   */
  alt: string;
  /**
   * Width of Image
   */
  width?: number;
  /**
   * Height of image
   */
  height?: number;
  /**
   * Layout of Image
   */
  layout?: LayoutValue
}

const NextImage = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    const {
     className="",
     src,
     alt,
     width,
     height,
     layout,
      ...rest
    } = props;

    return <Image src={src} alt={alt} {...(width&&height) ? {width, height}: {layout}} className={`img-inner ${className}`} />;
  }
);

NextImage.displayName = "NextImage";

export default NextImage;

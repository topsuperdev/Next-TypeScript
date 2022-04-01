import * as React from 'react';
import NextLink from 'next/link';

type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkProps extends JasesCommon.BaseProps {
  /**
   * HTML ID of `Link`
   */
  id?: string;
  /**
   * The URL to navigate to when the `Link` is clicked
   */
  href: string;
  /**
   * Specifies where to open the navigated document
   */
  target?: LinkTarget;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: string;
  /**
   * Element to be rendered
   */
  children: React.ReactNode;
}

export const Link = (props: LinkProps) => {
  const { children, className, href, ...rest } = props;

  return (
    <NextLink href={href}>
      <a className={className} {...rest}>
        {children}
      </a>
    </NextLink>
  );
};

Link.displayName = 'Link';

export default Link;

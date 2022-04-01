import { startCase } from 'lodash';
import React, { FC } from 'react';

interface Props {}

const UnlistedBadge: FC<Props> = () => {
  return (
    <span className={`inline-flex text-primary-medium items-center px-2 py-0.5 rounded text-xs font-medium shadow-sm bg-app-light`}>
      Unlisted
    </span>
  )
}

export default UnlistedBadge;

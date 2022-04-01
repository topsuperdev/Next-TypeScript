import { startCase } from 'lodash';
import React, { FC } from 'react';

interface Props {
  metadata: Solana.MetaplexMetadata | null
}

const MetadataAttrs: FC<Props> = ({ metadata }) => {
  return (
    <div className="pt-2">
      <div className="overflow-auto">
        <table className="w-full divide-y bg-app-background-light overflow-x-scroll">
          <thead className="bg-app-background">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider">
                Attr.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider" />
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-primary-dark uppercase tracking-wider">
                % Rarity
              </th>
            </tr>
          </thead>
          <tbody>
            {
              metadata && metadata?.attributes && metadata?.attributes.length && metadata?.attributes?.map((attr, index) => {
                return (
                  <tr key={attr.trait_type} className={index % 2 === 0 ? "bg-app-primary-light" : "bg-app-background"}>
                    <td className="px-6 py-2 whitespace-nowrap text-xs font-medium text-primary-dark ">{startCase(attr.trait_type)}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-xs font-medium text-primary-dark overflow-hidden">{attr?.value}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-xs font-medium text-right text-primary-medium">Coming soon</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MetadataAttrs

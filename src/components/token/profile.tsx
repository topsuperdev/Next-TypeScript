import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import React, { FC } from 'react';
import { Image } from "react-bootstrap";
import TokenAddressRenderer from '../ag-grid-renderers/token-address';
import MetadataAttrs from '../token-detail-modal/metadata-attrs';
import ViewOnExchangeLink from '../token-detail-modal/view-on-exchange-link';
import Txns from '../token-detail-modal/txns';

interface Props {
  token: Solana.SolanaToken
}

const TokenProfile: FC<Props> = (props) => {
  const { token } = props

  // https://tailwindui.com/components/marketing/sections/faq-sections
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  let metadataContent: Solana.MetaplexMetadata | null = null;
  try {
    metadataContent = JSON.parse(token.metadataContent)
  } catch (e) {
    throw new Error(`Failed to decode metadataContent. token - ${token}`)
  }
  return (
    <>
      {metadataContent && metadataContent?.attributes ? (
        <>
          <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

            {token.centralizedStorageImageUrl && token.centralizedStorageImageUrl.startsWith('https://') && (
              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                <Image alt={token.name} className="rounded w-full" src={token.centralizedStorageImageUrl} />
                <ViewOnExchangeLink token={token} />
              </div>
            )}

            <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-1 md:px-1 md:w-full lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
              <div className="bg-app-background-light">
                <div className="max-w-7xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    {/* <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2> */}
                    <dl className="mt-2 space-y-2 divide-y divide-gray-200">
                      <Disclosure as="div" defaultOpen={true} key='metadata-attrs' className="mt-2 mb-3">
                        {({ open }) => (
                          <>
                            <dt className="text-lg">
                              <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                <span className="font-medium text-primary-dark">Attributes</span>
                                <span className="ml-6 h-7 flex items-center">
                                  <ChevronDownIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                    aria-hidden="true"
                                  />
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 shadow-sm">
                              <MetadataAttrs metadata={metadataContent} />
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-app-background-light mx-1 rounded mt-4 w-full overflow-hidden">
              <div className="max-w-full mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:px-8">
                <div className="max-w-full mx-auto divide-y-2 divide-gray-200">
                  {/* <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2> */}
                  <dl className="mt-2 space-y-2 divide-y divide-gray-200">
                    <Disclosure as="div" defaultOpen={true} key="token-txns">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                              <span className="font-medium text-primary-dark">Transactions</span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 mb-3 shadow-sm">
                            <Txns token={token} />
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-sm text-red-600 text-center">
          Unable to retrieve metadata for item ({TokenAddressRenderer({ value: token.tokenAddr })}).
        </div>
      )}
    </>
  )
}

export default TokenProfile

import { Menu, Transition } from '@headlessui/react'
import { DuplicateIcon, ShareIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'

interface Props {
  walletAddr: string;
}
const ShareDropdown: FC<Props> = ({ walletAddr }) => {
  const router = useRouter();
  const onClipboard = () => {
    navigator.clipboard.writeText(`${window.location.host}${router.asPath}`);
  };
  const shareOntwitter = () => {
    var url = 'https://twitter.com/share?url=' + window.location.host + router.asPath;
    window.open(url, "_blank", "resizable=yes,top=200,left=0,width=600,height=400");
    return false;
  };
  return (
    <div className="w-56 text-right float-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-base text-primary-dark">
            <ShareIcon
              className="w-5 h-5 mr-2"
              aria-hidden="true"
            />
            Share
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-64 origin-top-right bg-black border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'text-gray-300' : 'text-white'} group flex rounded-md items-center w-full px-2 py-2 text-base font-medium`}
                    onClick={onClipboard}
                  >
                    <DuplicateIcon
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Copy to Clipboard
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? 'text-gray-300' : 'text-white'} group flex rounded-md items-center w-full px-2 py-2 text-base font-medium`}
                    onClick={shareOntwitter}
                  >
                    {
                      (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="w-5 h-5 mr-2"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKqSURBVHgBrVZNaBNBFH4Tc/BQ0qAHiyYlp4Ix4i81jTnoocEGoQUD0aPBaA8KkaoXhUKPamnAkxbq0VYitJcipdAe1PqDVTD2LM0eSk8xF3NInc73yC6bzWwbmn6w2ZnZmffeN+97MxGk4D/YFTrgpdeSxGki6ac2IUjObtXE/XJ144+AcY9X/NAZ9vl8lL6RolgsSidOhikQDPC4UTKotG7QzHSBVj5+ppLqa9yU/9fkGXG448isinzQaTh7J0PZ4Qy3d8P40zyNP8trmNCyONTRJe2DQRXlu7lpK9pWARapwesONqLs2Q/j5tqCWhtsWCv9DQy+rn7Yk3E7wKD/cpIqfyvctxiMPMq1bRwAg+ztjNVnBhj8oqJ3RtKpEuzrbE7y5MspTiwAIUBlyGgf3gqIvvdcnN/MoO9itMnI+/kFpmo4JPhWSXP0yRhVKhV+4Ch37wEVf61ZcxBUOp3iNjuA1p2APMHimlLG5Kspy9EnpXsdBpKJhn6sHjQ7CGr2PqIKC+NwMvp4jHrPximhGIGZE9gBZ/7Caj3gxY8uuaDsrNBicY100AVojnnIBdi2SCRMrSAWj7p+YweG9iwhmnjxXKsiOxCpqR47TPbsYCfq3bvUBipfB2Pd5mDFRRmIfmFpnq4MJLTf84qhW3HipGWg0ELHeuTmxqas/qtaz9Lishy+dVeGjvZIzLE/VxND8vu31Yb5zufU8fM8l1WEioPWRx7mrAhYet0B1nOpTheMkHhdYdqB4jNzYB12WLyotmM/DrsLqmZMWDIFC1Stm6JaNY47wQ4PLgX7hL060V84yoG6oH86J+JY0F2BOvCBp+b2X0o2GZck53a89LmIVEJR1WjbL/3fqnZw8M28KbCTZtQvfTThRHjlhCAxRG1DlLErWzW6ib8t2zcMT2dl8kVlAAAAAElFTkSuQmCC"
                          alt="share on twitter" />
                      )
                    }
                    Share on Twitter
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ShareDropdown;

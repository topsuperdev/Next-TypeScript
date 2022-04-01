import { Link } from 'src/components/atoms/Link'
import React, { FC } from 'react'
import Image from 'src/components/atoms/Image';

// <div className="w-6 h-10">

const Logo: FC = () =>
  <Link href="/" className="flex">
    {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2045.4795076804614 3345.0655573090753">
        <g transform="scale(17.253277865453754) translate(10, 10)">
          <defs id="SvgjsDefs3638"></defs>
          <g id="SvgjsG3639" transform="matrix(10.477657534978283,0,0,10.477657534978283,2.6656392259015576,-73.55315069956565)" fill="#94e644">
            <path d="M2.8 12.7 l0 -2.08 l0 -2.42 l-2.1 -1.18 l0 0 l0 2.4 l2.1 1.2 l6.26 -3.6 l0 12.98 l-2.1 0 l0 0 l0 -9.68 l-4.16 2.38 l-2.1 -1.18 l0 8.48 l0 0 l2.1 0 l0 -7.3 z"></path>
          </g>
        </g>
      </svg> */}
    <Image alt="Jases.IO" className="cursor-pointer" width={81.34} height={24} src="/logo-small.png" />
  </Link>

export default Logo

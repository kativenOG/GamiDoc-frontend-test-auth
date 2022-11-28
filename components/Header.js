import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from "next/router";

const sanityIoImageLoader = ({ src, width, quality }) => {
  return `https://i.imgur.com/Y3QF08D.png`;
};

function Header() {
  const router = useRouter();

  return (
    <div className="relative px-24 xs:px-8 py-9 flex flex-wrap items-center justify-between mb-3">
      <Link href="/">
        <Image
          loader={sanityIoImageLoader}
          src="image-src"
          alt="GamiDoc"
          width={120}
          height={20}
        />
      </Link>
      <div className="flex flex-row gap-5" id="button">
        <button disabled={true} className="py-4 inline-block px-8 xs:px-4 xs:py-2 bg-yellow-gamy text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md disabled:bg-yellow-600" onClick={() => router.push("/signup")}>
          SIGN UP
        </button>
        <button disabled={true} className="py-4 inline-block xs:px-4 xs:py-2 px-8 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md  disabled:bg-gray-800" >
          SIGN IN
        </button>
      </div>
    </div>
  );
}

export default Header;

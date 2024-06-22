import Image from "next/image";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className=" h-full w-full flex flex-col justify-center items-center">
      <Image 
          src="/ipsum-loading.svg"
          alt="logo"
          width={120}
          height={120}
          className=" animate-pulse duration-700"
        />
      Loading
    </div>
  );
};

export default Loading;

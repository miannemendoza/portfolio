import React from "react";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import Image from "next/image";
const PortfolioComponent = () => {
  return (
    <section id="work" className="py-28">
      <div className="dark:text-white">
        <h3 className="lg:text-4xl py-1 text-2xl font-bold ">Portfolio </h3>
        <div>
          <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
            {` Check out some things that I've built`}
          </p>
          <div className="border-t border-gray-300 my-4 opacity-15" />
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            alt=""
            src={web1}
            className="rounded-lg object-cover"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt=""
            src={web2}
            className="rounded-lg object-cover"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt=""
            src={web3}
            className="rounded-lg object-cover"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt=""
            src={web4}
            className="rounded-lg object-cover"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt=""
            src={web5}
            className="rounded-lg object-cover"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt=""
            src={web6}
            className="rounded-lg object-cover"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;

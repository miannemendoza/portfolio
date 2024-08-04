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
    <section>
      <div className="dark:text-white">
        <h3 className="lg:text-3xl py-1 text-2xl font-bold ">Portfolio </h3>
        <div>
          <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="lg:text-base text-sm py-2 leading-8 text-gray-800 dark:text-white">
            I offer from a wide range of services, including programming,
            designing and technical consult
          </p>
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

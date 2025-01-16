import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative clear-both">
      <footer className="bg-[#2b2b30] ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image src={"/logo/logo.svg"} alt="logo" width={80} height={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/" className="hover:underline">
                      Pricing Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:underline">
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Follow us</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase ">Legal</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                FlixGo
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

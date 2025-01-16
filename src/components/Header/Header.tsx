"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-[#2b2b30]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only text-white">FLIX</span>
            <Image className="h-8 w-auto" src={"/logo/logo.svg"} alt="logo" width={20} height={20} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setShowMenu(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#" className="text-sm/6 font-sm text-white">
            HOME
          </Link>
          <Link href="#" className="text-sm/6 font-sm text-white">
            CATELOG
          </Link>
          <Link href="#" className="text-sm/6 font-sm text-white">
            PRICING PLAN
          </Link>
          <Link href="#" className="text-sm/6 font-sm text-white">
            HELP
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm/6 font-sm text-white">
            <button className="signInBtn px-10 py-2 rounded-sm">SIGN IN</button>
          </Link>
        </div>
      </nav>

      {showMenu && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 bg-black bg-opacity-50" onClick={() => setShowMenu(false)}></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#2b2b30] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">flex</span>
                <img className="h-8 w-auto" src={"/logo/logo.svg"} alt="logo" width={20} height={20} />
              </a>
              <button type="button" onClick={() => setShowMenu(false)} className="-m-2.5 rounded-md p-2.5 text-white">
                <span className="sr-only">Close menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black">
                    HOME
                  </Link>
                  <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black">
                    CATELOG
                  </Link>
                  <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black">
                    PRICING PLAN
                  </Link>
                  <Link href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black">
                    HELP
                  </Link>
                </div>
                <div className="py-6">
                  <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-50 hover:text-black">
                    SIGN IN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

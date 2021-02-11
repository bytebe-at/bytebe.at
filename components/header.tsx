import { FunctionComponent } from "react";
import Link from "next/link";

const Header: FunctionComponent = () => (
  <header className="shadow-xl z-50 sticky top-0">
    <div className="mx-auto max-w-screen-xl flex items-center gap-2 px-2">
      <Link href="/">
        <a className="hover:bg-gray-100 dark:hover:bg-gray-800 flex h-14 p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            
            shapeRendering="crispEdges"
            viewBox="0 -0.5 39 9"
          >
            <path
              stroke="currentcolor"
              d="M0 0h1m9 0h1m9 0h1m14 0h1M0 1h1m9 0h1m9 0h1m14 0h1M0 2h1m9 0h1m9 0h1m14 0h1M0 3h4m1 0h1m2 0h1m1 0h3m2 0h4m1 0h4m1 0h4m1 0h4m1 0h3M0 4h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h4m1 0h1m2 0h1m1 0h4m4 0h1m1 0h1M0 5h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m4 0h1m2 0h1m1 0h1m4 0h4m1 0h1M0 6h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4M8 7h1M5 8h4"
            ></path>
          </svg>
        </a>
      </Link>
      <div className="flex-1" />
      <Link href="/login">
        <a className="text-gray-700 p-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 rounded-xl block text-center">
          Log&nbsp;In
        </a>
      </Link>
      <Link href="/sign-up">
        <a className="bg-blue-700 text-white p-6 py-2 rounded-xl shadow-xl block text-center my-2">
          Sign&nbsp;Up
        </a>
      </Link>
    </div>
  </header>
);

export default Header;

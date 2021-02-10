import styles from "../styles/Home.module.css";
import Head from 'next/head'

const HomePage = () => (
  <div className="bg-gradient-to-br xl:bg-gradient-to-r from-blue-800 to-pink-600 h-full">
    <Head>
      <title>bytebeat</title>
    </Head>
    <div className="h-full flex flex-col items-left w-min mx-auto justify-center  text-white">
      <div className="bg-black p-5 px-5 pb-0 flex-grow-0 bg-opacity-50 w-min">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 39 9"
          shapeRendering="crispEdges"
          className="h-10 "
        >
          <path
            stroke="currentcolor"
            d="M0 0h1m9 0h1m9 0h1m14 0h1M0 1h1m9 0h1m9 0h1m14 0h1M0 2h1m9 0h1m9 0h1m14 0h1M0 3h4m1 0h1m2 0h1m1 0h3m2 0h4m1 0h4m1 0h4m1 0h4m1 0h3M0 4h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h4m1 0h1m2 0h1m1 0h4m4 0h1m1 0h1M0 5h1m2 0h1m1 0h1m2 0h1m1 0h1m4 0h1m4 0h1m2 0h1m1 0h1m4 0h4m1 0h1M0 6h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4m1 0h4M8 7h1M5 8h4"
          ></path>
        </svg>
      </div>
      <pre className='text-4xl bg-black bg-opacity-50 p-4 px-6'>
        <code>
          63 6f 6d 69
          <br />
          6e 67 20 73
          <br />
          6f 6f 6e 00
        </code>
      </pre>
    </div>
  </div>
);

export default HomePage;

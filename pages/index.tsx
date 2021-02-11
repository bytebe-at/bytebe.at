import styles from "../styles/Home.module.css";
import Head from "next/head";
import { GetStaticProps } from "next";
import prisma from "lib/prisma";
import Layout from "@components/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      users: await prisma.user.findMany({ select: { username: true } }),
    },
  };
};

const HomePage = (props) => (
  <Layout>
    <Head>
      <title>bytebeat</title>
    </Head>
  </Layout>
);

export default HomePage;

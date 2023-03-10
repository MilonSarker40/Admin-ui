import Head from 'next/head';
import {Fragment } from 'react';
import Header from '../comopnents/Header/Header';
import MainContent from '../comopnents/MainContent/MainContent';
import Script from 'next/script'





export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Azra Dashboard</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js" />
      </Head>
      <MainContent />
    </Fragment>
  )
}

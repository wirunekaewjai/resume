import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
// import flush from 'styled-jsx/server';

class MyDocument extends Document
{
  render ()
  {
    return (
      <Html lang="th">
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// MyDocument.getInitialProps = async (ctx) =>
// {
//   const result = await ctx.renderPage();
//   const styles = flush();

//   return { ...result, styles };
// };

export default MyDocument;

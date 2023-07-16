import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Other head elements */}
          <link
            href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&family=Island+Moments&family=Manrope:wght@200;300;400;500;600&family=Mochiy+Pop+P+One&family=Parisienne&family=Tillana&family=Urbanist:wght@100&display=swap" rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
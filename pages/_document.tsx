import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from "next/document";

export default function CustomDocument(props: DocumentProps) {
  return (
    <Html lang={props.locale}>
      <Head>
        <meta name="copyright" content="Simbiose Ventures" />
        <meta name="reply-to" content="lucas.oliveira@simbioseventures.com" />

        <meta charSet="UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="language" content={props.locale} />
        <meta name="publisher" content="Simbiose Ventures" />
        <meta name="author" content="Simbiose, ola@simbioseventures.com" />
        <meta name="revised" content="Sunday, January 1st, 2023, 01:00 pm" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content={props.locale} />
        <meta property="og:site_name" content="indays.app" />

        <meta property="twitter:card" content="summary" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (context: DocumentContext) => {
  const initialProps = await Document.getInitialProps(context);
  return { ...initialProps, locale: context?.locale || "pt-BR" };
};

import React from "react";
import Script from "next/script";
const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;

export const Analytics: React.FC = () => {
  return (
    <React.Fragment>
      <Script
        strategy="lazyOnload"
        id="GoogleTagManagerImport"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      />

      <Script id="GoogleTagManagerConfig" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
    </React.Fragment>
  );
};

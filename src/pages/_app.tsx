import { type AppType } from "next/dist/shared/lib/utils";
import { Inter, Outfit } from "@next/font/google";

import "../styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${outfit.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

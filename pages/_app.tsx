import type { AppProps } from "next/app";

import { DesktopNav } from "@/components/Nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex xl:bg-primary-50 bg-primary-100 min-h-screen font-Rajdhani">
      <DesktopNav />
      <div className="max-h-screen overflow-auto w-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

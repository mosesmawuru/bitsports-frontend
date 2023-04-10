import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen xl:bg-primary-50 bg-primary-100 font-Rajdhani">
      <nav className="hidden xl:flex xl:flex-col bg-primary-200 small-border-r xl:border-r-primary-150 p-14 xl:justify-center xl:items-center"></nav>
      <Component {...pageProps} />
    </div>
  );
}

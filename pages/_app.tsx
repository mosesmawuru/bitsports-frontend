import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen lg:bg-primary-50 bg-primary-100 font-Rajdhani">
      <nav className="hidden lg:flex lg:flex-col bg-primary-200 small-border-r lg:border-r-primary-150 p-14 lg:justify-center lg:items-center"></nav>
      <Component {...pageProps} />
    </div>
  );
}

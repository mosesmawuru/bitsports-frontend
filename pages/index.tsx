import { Button, Header } from "@/components";
import Pagination from "@/components/Pagination";
import QuestComponent from "@/components/Quest";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const scroll = () => {
    window.scrollBy({
      top: 10000, // could be negative value
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full scroll-smooth">
      <Header />
      <div className="container mx-auto px-4 lg:px-0">
        <div className="banner w-full relative mt-5 xl:mt-0">
          <div className="win relative" />
          <div className="flex flex-col justify-center items-center relative banner-text">
            <h2 className="text-white mb-4 font-bold text-xl px-8 pt-4 xl:pt-0 xl:px-0 xl:text-6xl xl:text-4xl text-center font-Poppins">
              WORLD FIRST PLAY-TO-EARN POOL GAME
            </h2>
            <Link href="#quest">
              <Button onClick={scroll} px="px-4" text="Test2Earn" />
            </Link>
          </div>
        </div>
      </div>

      <section className="px-3 xl:px-0 mt-6 xl:mt-0 xl:container xl:mx-auto">
        <h3 className="xl:text-2xl text-xl text-white font-bold ">QUESTS</h3>
        <p className="text-secondary-200 xl:text-sm text-xs">
          Accept and play some of the below F2E (Free to Earn) modes, earn $BITP
          and other Crypto
        </p>

        <div
          id="quest"
          className="mt-5 xl:gap-11 flex w-full flex-col xl:flex-row  items-start justify-between"
        >
          <div className="flex w-full flex-col gap-2">
            {[1, 2, 3, 4].map((item, index) => (
              <QuestComponent key={index} index={index} />
            ))}
            <Pagination />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Image from "next/image";
import Banner from "@/public/banner2.png";
import { Button, Header } from "@/components";
import { variantTypes, volumeTypes } from "@/components/Button";
import { ArrowDown, Quest } from "@/public/icons";

const quests = [
  {
    title: "AMOUNT",
    content: "10 BITP",
  },
  {
    title: "WIN STREAK",
    content: "3",
  },
  {
    title: "QUEST CREDIT",
    content: "0.5",
  },
  {
    title: "DIFFICULTY",
    content: "HARD",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto">
        <div className="banner w-full relative mt-5 lg:mt-0">
          <div className="win relative" />
          <div className="flex flex-col justify-center items-center relative banner-text">
            <h2 className="text-white mb-4 font-bold text-xl px-8 pt-4 lg:pt-0 lg:px-0 xl:text-6xl lg:text-4xl text-center font-Poppins">
              WORLD FIRST PLAY-TO-EARN POOL GAME
            </h2>
            <Button isWavy px="px-4" text="Play Bit Pool Web" />
          </div>
        </div>
      </div>

      <section className="px-3 lg:px-0 mt-6 lg:mt-0 lg:container lg:mx-auto">
        <h3 className="lg:text-2xl text-xl text-white font-bold ">QUESTS</h3>
        <p className="text-secondary-200 lg:text-sm text-xs">
          Accept and play some of the below F2E (Free to Earn) modes, earn $BITP
          and other Crypto
        </p>

        <div className="mt-5 lg:gap-10 xl:gap-14 flex w-full flex-col lg:flex-row  items-start justify-between">
          <div className="flex w-full flex-col gap-2">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                className="bg-primary-400 px-5 py-3 flex justify-between"
                key={index}
              >
                <div className="h-11 w-11 rounded-full bg-white flex justify-center items-center">
                  <Quest />
                </div>
                {quests.map((quest, index) => (
                  <div
                    className={`flex flex-col items-center ${
                      index > 1 && "hide"
                    }`}
                    key={quest.title}
                  >
                    <div className="text-primary-450 text-sm font-bold">
                      {quest.title}
                    </div>
                    <div className=" text-white text-base font-semibold">
                      {quest.content}
                    </div>
                  </div>
                ))}
                <Button
                  variant={variantTypes.secondary}
                  textVol={volumeTypes.sm}
                  px="xl:px-16 px-5"
                  text="ACCEPT"
                />
                <div className="cursor-pointer lg:hidden self-center">
                  <ArrowDown />
                </div>
              </div>
            ))}
          </div>
          <Image
            priority={true}
            height={400}
            width={495}
            src={Banner}
            alt="pool banner"
            className="hidden lg:block"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import Banner from "@/public/banner2.png";
import { Button, Header } from "@/components";
import { variantTypes, volumeTypes } from "@/components/Button";
import { ArrowDown, ArrowLeft, ArrowRight, Quest } from "@/public/icons";

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
        <div className="banner w-full relative mt-5 xl:mt-0">
          <div className="win relative" />
          <div className="flex flex-col justify-center items-center relative banner-text">
            <h2 className="text-white mb-4 font-bold text-xl px-8 pt-4 xl:pt-0 xl:px-0 xl:text-6xl xl:text-4xl text-center font-Poppins">
              WORLD FIRST PLAY-TO-EARN POOL GAME
            </h2>
            <Button isWavy px="px-4" text="Play Bit Pool Web" />
          </div>
        </div>
      </div>

      <section className="px-3 xl:px-0 mt-6 xl:mt-0 xl:container xl:mx-auto">
        <h3 className="xl:text-2xl text-xl text-white font-bold ">QUESTS</h3>
        <p className="text-secondary-200 xl:text-sm text-xs">
          Accept and play some of the below F2E (Free to Earn) modes, earn $BITP
          and other Crypto
        </p>

        <div className="mt-5 xl:gap-10 xl:gap-14 flex w-full flex-col xl:flex-row  items-start justify-between">
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
                <div className="cursor-pointer xl:hidden self-center">
                  <ArrowDown />
                </div>
              </div>
            ))}
            <div className="hidden xl:flex mt-4 xl:justify-between xl:items-center">
              <div className="text-sm text-primary-500">
                Showing 9 of 10 tournaments
              </div>
              <div className="flex items-center gap-1">
                <div
                  className={`w-8 h-8 bg-primary-550 cursor-pointer rounded-sm border border-primary-150 flex justify-center items-center`}
                >
                  <ArrowLeft />
                </div>
                {[1, 2].map((item, index) => (
                  <div
                    key={item}
                    className={`w-8 h-8 cursor-pointer rounded-sm border flex justify-center items-center ${
                      index === 0
                        ? "border-secondary-100"
                        : "border-primary-150"
                    }`}
                  >
                    <div className="text-primary-500 text-sm">{item}</div>
                  </div>
                ))}
                <div
                  className={`w-8 h-8 cursor-pointer rounded-sm border border-primary-150 flex justify-center items-center`}
                >
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
          <Image
            priority={true}
            height={400}
            width={495}
            src={Banner}
            alt="pool banner"
            className="hidden xl:block cursor-pointer"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex xl:hidden mt-4 justify-between items-center">
          <div className="text-sm text-primary-500">Showing 9 of 10 PVP</div>
          <div className="flex items-center gap-1">
            <div
              className={`w-8 h-8 bg-primary-550 cursor-pointer rounded-sm border border-primary-150 flex justify-center items-center`}
            >
              <ArrowLeft />
            </div>
            {[1, 2].map((item, index) => (
              <div
                key={item}
                className={`w-8 h-8 cursor-pointer rounded-sm border flex justify-center items-center ${
                  index === 0 ? "border-secondary-100" : "border-primary-150"
                }`}
              >
                <div className="text-primary-500 text-sm">{item}</div>
              </div>
            ))}
            <div
              className={`w-8 h-8 cursor-pointer rounded-sm border border-primary-150 flex justify-center items-center`}
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

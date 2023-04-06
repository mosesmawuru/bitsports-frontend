import { Button, Header } from "@/components";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto">
        <div className="banner w-full relative">
          <div className="win relative" />
          <div className="flex flex-col justify-center items-center relative banner-text">
            <h2 className="text-white mb-3 font-bold text-6xl text-center font-Poppins">
              WORLD FIRST PLAY-TO-EARN POOL GAME
            </h2>
            <Button isWavy px="px-4" text="Play Bit Pool Web" />
          </div>
        </div>
      </div>
    </div>
  );
}

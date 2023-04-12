import { Header } from "@/components";
import { Cup } from "@/public/icons";

const Leaderboard = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto">
        <div className="relative mt-20 flex flex-col justify-center items-center">
          <Cup />
          <div className="leader text-primary-100 font-bold xl:text-primary-50 font-Poppins absolute xl:-top-1 -top-10 text-center">
            BITPOOL LEADERBOARD
          </div>
          <div className="text-white md:top-16 lg:top-6 top-3 text-center absolute mint font-Poppins font-semibold text-lg px-5 xl:px-0 md:text-3xl lg:text-2xl">
            MEET & MINT YOUR MYSTERIOUS GAMER ON THE METAVERSE
          </div>
          <div className="text-white md:top-36 lg:top-16 md:px-24 lg:px-96 top-14 text-center absolute font-Poppins font-light px-5 text-sm md:text-base">
            MORE THAN JUST NFT’S. MINT, POWER UP, EARN ALONGSIDE YOUR FAVORITE
            GAMERS IN THE METAVERSE.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

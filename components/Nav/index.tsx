import Image from "next/image";

import PoolLogo from "@/public/pool-logo.png";
import {
  Ball,
  Contact,
  Dapp,
  Leaderboard,
  News,
  Nft,
  Tutorial,
} from "@/public/icons";
import Link from "next/link";

const items = [
  {
    title: "QUEST",
    icon: <Ball fill="#777786" />,
    url: "#",
  },
  {
    title: "NFT",
    icon: <Nft />,
    url: "#",
  },
  {
    title: "LEADERBOARD",
    icon: <Leaderboard />,
    url: "#",
  },
  {
    title: "NEWS & EVENTS",
    icon: <News />,
    url: "#",
  },
  {
    title: "TUTORIAL",
    icon: <Tutorial />,
    url: "#",
  },
  {
    title: "DAPP",
    icon: <Dapp />,
    url: "#",
  },
];

const DesktopNav = () => {
  return (
    <nav className="hidden xl:max-h-screen xl:overflow-auto xl:flex xl:flex-col xl:justify-start xl:items-center bg-primary-200 small-border-r xl:border-r-primary-150 p-6">
      <Image
        priority={true}
        height={87}
        width={78}
        src={PoolLogo}
        alt="bitpool logo"
      />

      <div className="flex flex-col gap-12 mt-10">
        {items.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className="flex gap-2 flex-col duration-300 justify-center text-primary-700 hover:text-white items-center nav-link"
          >
            {item.icon}
            <p className="text-sm font-semibold text-center">{item.title}</p>
          </Link>
        ))}
      </div>

      <div className="mt-20">
        <Contact />
      </div>
    </nav>
  );
};

export { DesktopNav };

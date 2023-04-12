import Image from "next/image";
import { motion, Variants } from "framer-motion";

import PoolLogo from "@/public/pool-logo.png";
import {
  Ball,
  Cancel,
  Contact,
  Dapp,
  Leaderboard,
  News,
  Nft,
  OfficialLogo,
  Tutorial,
} from "@/public/icons";
import Link from "next/link";
import Button, { variantTypes } from "../Button";
import { useEffect, useState } from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

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
    url: "/leaderboard",
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
    <motion.nav
      animate={"open"}
      transition={{ ease: "easeOut", duration: 2 }}
      className="hidden xl:max-h-screen xl:overflow-auto xl:flex xl:flex-col xl:justify-start xl:items-center bg-primary-200 small-border-r xl:border-r-primary-150 p-6"
    >
      <Image
        priority={true}
        height={87}
        width={78}
        src={PoolLogo}
        alt="bitpool logo"
      />

      <motion.div variants={variants} className="flex flex-col gap-12 mt-10">
        {items.map((item) => (
          <motion.div variants={itemVariants} key={item.title}>
            <Link
              href={item.url}
              className="flex gap-2 flex-col duration-300 justify-center text-primary-700 hover:text-white items-center nav-link"
            >
              {item.icon}
              <p className="text-sm font-semibold text-center">{item.title}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20">
        <Contact />
      </div>
    </motion.nav>
  );
};

const MobileNav = ({ open, close }: { open: boolean; close: () => void }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      close();
    }, 200);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      transition={{ ease: "easeOut", duration: 2 }}
      onClick={handleClose}
      className={`${
        open ? "fixed" : "hidden"
      } xl:hidden z-30 left-0 top-0 mobile-nav-container`}
    >
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        exit={{ opacity: isOpen ? 0 : 1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
        className="p-5 z-50 mobile-nav bg-primary-800 max-h-screen h-screen overflow-y-auto"
      >
        <div className="flex items-center justify-between gap-4">
          <Image
            priority={true}
            height={53.75}
            width={65.39}
            src={PoolLogo}
            alt="pool logo"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">BITPOOL</h1>
            <div className="flex items-center justify-center gap-1">
              <OfficialLogo size="15" />
              <div className="text-primary-300 text-xs pt-0.5 font-Poppins">
                Official Page
              </div>
            </div>
          </div>
          <motion.div whileTap={{ scale: 0.97 }} onClick={handleClose}>
            <Cancel />
          </motion.div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            variant={variantTypes.outline}
            px="px-8"
            text="Create Challenge"
          />
        </div>
        <motion.div variants={variants} className="flex flex-col gap-12 mt-10">
          {items.map((item) => (
            <motion.div variants={itemVariants} key={item.title}>
              <Link
                href={item.url}
                className="flex gap-4 duration-300 text-primary-700 hover:text-white items-center nav-link"
              >
                {item.icon}
                <p className="xl:text-sm text-base font-semibold text-center">
                  {item.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export { DesktopNav, MobileNav };

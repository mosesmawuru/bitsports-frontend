import {
  ArrowDown,
  Bell,
  Game,
  MenuBars,
  Message,
  OfficialLogo,
  QC,
  USDG,
} from "@/public/icons";
import PoolLogo from "@/public/pool-logo.png";
import Profile from "@/public/profile.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button, { variantTypes } from "../Button";
import Login from "../Login";
import Modal from "../Modal";
import { MobileNav } from "../Nav";
import Signup from "../Signup";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isChallengeOpen, setIsChallengeOpen] = useState(false);

  const toggleLogin = () => {
    setIsOpenSignup(false);
    setIsOpenLogin(!isOpenLogin);
  };
  const toggleSignup = () => {
    setIsOpenLogin(false);
    setIsOpenSignup(!isOpenSignup);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleChallenge = () => {
    setIsChallengeOpen(!isChallengeOpen);
  };
  return (
    <>
      <div className="bg-primary-200 small-border-b xl:border-b-primary-150 border-b-black">
        <header className="hidden w-full xl:flex xl:items-center xl:justify-between container mx-auto py-6">
          <div>
            <h1 className="text-3xl font-bold text-white">BITPOOL</h1>
            <div className="flex items-center justify-center gap-1">
              <OfficialLogo size="22" />
              <div className="text-primary-300 text-sm pt-0.5 font-Poppins">
                Official Page
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-7">
              <Button
                variant={variantTypes.outline}
                px="px-5"
                text="Create Challenge"
                onClick={toggleChallenge}
              />
              <div className="cursor-pointer hidden xl:block">
                <Message />
              </div>
              <div className="cursor-pointer relative hidden xl:block">
                <Bell />
                <div className="bg-secondary-250 absolute top-2.5 -right-2 h-4 w-4 rounded-full flex justify-center items-center">
                  <div className="text-white font-bold ten">3</div>
                </div>
              </div>
              <div className="flex items-center">
                <Link href="/wallet">
                  <div className="cursor-pointer px-6 py-7 flex items-center gap-3.5 bg-primary-950 rounded-l h-12">
                    <USDG />
                    <div className="font-medium lg:text-base text-xs text-white font-Poppins">
                      33 USDG
                    </div>
                    <div className="ml-3">
                      <QC />
                    </div>
                    <div className="font-medium flex lg:text-base text-xs text-white font-Poppins">
                      5 QC
                    </div>
                  </div>
                </Link>
                <div className="cursor-pointer relative px-6 py-7 justify-center items-center bg-primary-1000 rounded-br h-12">
                  <ArrowDown />
                  <div className="h-9 w-9 bg-primary-200 rotate-45 -top-5 -right-7 absolute"></div>
                </div>
              </div>
            </div>
            {loggedIn ? (
              <Image
                priority={true}
                height={75}
                width={79}
                src={Profile}
                alt="profile"
                className="cursor-pointer"
              />
            ) : (
              <div className="flex items-center gap-4">
                <Button onClick={toggleSignup} px="px-7" text="SIGN UP" />
                <Button
                  onClick={toggleLogin}
                  variant={variantTypes.outline}
                  text="SIGN IN"
                />
              </div>
            )}
          </div>
        </header>
        <header className="flex justify-between items-center xl:hidden bg-primary-50 px-5 py-4">
          <div className="flex items-center gap-6">
            <div onClick={toggleNav}>
              <MenuBars />
            </div>
            <Image
              priority={true}
              height={51.31}
              width={45}
              src={PoolLogo}
              alt="pool logo"
            />
            <div>
              <h1 className="text-xl font-bold text-white">BITPOOL</h1>
              <div className="flex items-center justify-center gap-1">
                <OfficialLogo size="15" />
                <div className="text-primary-300 ten pt-0.5 font-Poppins">
                  Official Page
                </div>
              </div>
            </div>
          </div>
          {loggedIn ? (
            <div className="flex items-center">
              <Link href="/wallet">
                <div className="cursor-pointe px-2 py-3 flex items-center gap-3 bg-primary-950 h-8 rounded-l">
                  <USDG width={17} height={19.75} />
                  <div className="font-medium lg:text-base ten text-white font-Poppins">
                    33
                  </div>
                </div>
              </Link>
              <div className="cursor-pointer relative px-3 py-3 flex justify-center items-center bg-primary-1000 h-8 rounded-br">
                <ArrowDown />
                <div className="h-4 w-4 bg-primary-50 rotate-45 -top-2 -right-2.5 absolute"></div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button onClick={toggleSignup} text="SIGN UP" />
            </div>
          )}
        </header>
      </div>
      <MobileNav open={isNavOpen} close={toggleNav} />
      <Modal key={0} Body={Login} isOpen={isOpenLogin} close={toggleLogin} />
      <Modal key={1} Body={Signup} isOpen={isOpenSignup} close={toggleSignup} />
      <Modal
        key={2}
        Body={NoChallenge}
        isOpen={isChallengeOpen}
        close={toggleChallenge}
        isVoid
      />
    </>
  );
};

export default Header;

export const NoChallenge = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <Game />
      <div className="lg:text-2xl text-xl font-bold text-primary-900">
        CREATE CHALLENGE
      </div>
      <div className="lg:text-xl text-lg font-bold text-primary-450">
        This Feature Is Coming Soon
      </div>
    </div>
  );
};

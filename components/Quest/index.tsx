import { ArrowDown, Quest } from "@/public/icons";
import Link from "next/link";
import Button, { variantTypes, volumeTypes } from "../Button";

export interface IItemProp {
  title: string;
  content: string;
  index: number;
}

export interface IProp {
  index: number;
}

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

const QuestComponent = (prop: IProp) => {
  return (
    <div
      className="bg-primary-400 lg:h-20 h-14 px-5 items-center flex justify-between"
      key={prop.index}
    >
      <div className="h-11 w-11 rounded-full bg-white flex justify-center items-center">
        <Quest />
      </div>
      {quests.map((quest, index) => (
        <QuestItem key={index} index={index} {...quest} />
      ))}
      <Link href="/game">
        <Button
          variant={variantTypes.secondary}
          textVol={volumeTypes.sm}
          px="xl:px-20 px-5"
          text="ACCEPT"
        />
      </Link>
      <div className="cursor-pointer xl:hidden self-center">
        <ArrowDown />
      </div>
    </div>
  );
};

const QuestItem = (prop: IItemProp) => {
  return (
    <div
      className={`flex flex-col items-center ${prop.index > 1 && "hide"}`}
      key={prop.title}
    >
      <div className="text-primary-450 text-sm font-bold">{prop.title}</div>
      <div className=" text-white text-base font-semibold">{prop.content}</div>
    </div>
  );
};

export default QuestComponent;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ArrowDown, Quest } from "@/public/icons";
import Button, { variantTypes, volumeTypes } from "../Button";
import { IState } from "@/store";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { notification } from "antd";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { authActions } from "@/store/auth";

const PoolChallenge = (prop: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  const startGame = (challengeId: any) => {
    if (!currentUser) {
      notification.warning({
        message: "Warning!",
        description: "Please login!",
      });
      return;
    }

    localStorage.setItem("cid", challengeId.toString());
    const uid: any = currentUser.id;

    axios
      .post(`${SERVER_URI}/pool-game/start`, {
        cid: challengeId,
        uid,
      })
      .then((res) => {
        if (res.data.success) {
          notification.success({
            message: "Success",
            description: res.data.message,
          });
          localStorage.setItem("token", res.data.token);
          dispatch(authActions.setCurrentUser(jwtDecode(res.data.token)));
          router.push("/game");
        } else {
          notification.warning({
            message: "Warning!",
            description: res.data.message,
          });
        }
      });
  };

  return (
    <>
      <div
        className="bg-primary-400 lg:h-20 h-14 px-5 items-center flex justify-between"
        key={prop.index}
      >
        <div className="h-11 w-11 rounded-full bg-white flex justify-center items-center">
          <Quest />
        </div>
        <div className={`flex flex-col items-center`}>
          <div className="text-primary-450 text-sm font-bold">AMOUNT</div>
          <div className=" text-white text-base font-semibold">
            {prop.quest.amount}{" "}
            {prop.quest.coin_type === 1
              ? "BITP"
              : prop.quest.coin_type === 2
              ? "BUSD"
              : prop.quest.coin_type === 3
              ? "USDT"
              : "CAKE"}
          </div>
        </div>
        <div className={`flex flex-col items-center`}>
          <div className="text-primary-450 text-sm font-bold">Creater</div>
          <div className=" text-white text-base font-semibold">
            {"@"}
            {prop.quest.create_userid.username}
          </div>
        </div>
        <div className={`flex flex-col items-center hide`}>
          <div className="text-primary-450 text-sm font-bold">Opponent</div>
          <div className=" text-white text-base font-semibold">
            {prop.quest.gametype
              ? "@" + prop.quest.opponent_userid.username
              : "NO USER"}
          </div>
        </div>
        <div className={`flex flex-col items-center hide`}>
          <div className="text-primary-450 text-sm font-bold">Status</div>
          <div className=" text-white text-base font-semibold">
            {prop.quest.status_num <= 1
              ? "WAITING"
              : prop.quest.status_num == 2
              ? "PLAYING"
              : "ENDED"}
          </div>
        </div>
        {prop.quest.status_num <= 1 ? (
          <>
            {prop.quest.gametype ? (
              <>
                <Button
                  variant={variantTypes.secondary}
                  textVol={volumeTypes.sm}
                  onClick={() => startGame(prop.quest._id)}
                  px="xl:px-20 px-5"
                  text="ACCEPT"
                />
                <div className="cursor-pointer xl:hidden self-center">
                  <ArrowDown />
                </div>
              </>
            ) : (
              <>
                <Button
                  variant={variantTypes.primary}
                  textVol={volumeTypes.sm}
                  onClick={() => startGame(prop.quest._id)}
                  px="xl:px-20 px-5"
                  text="ACCEPT"
                />
                <div className="cursor-pointer xl:hidden self-center">
                  <ArrowDown />
                </div>
              </>
            )}
          </>
        ) : prop.quest.status_num == 2 ? (
          <>
            <Button
              variant={variantTypes.secondary}
              textVol={volumeTypes.sm}
              px="xl:px-20 px-5"
              text="PLAYING"
              disabled
            />
            <div className="cursor-pointer xl:hidden self-center">
              <ArrowDown />
            </div>
          </>
        ) : (
          <>
            <Button
              variant={variantTypes.secondary}
              textVol={volumeTypes.sm}
              px="xl:px-20 px-5"
              text="ENDED"
              disabled
            />
            <div className="cursor-pointer xl:hidden self-center">
              <ArrowDown />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PoolChallenge;

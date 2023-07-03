import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import PoolComponent from "@/components/PoolChallenge";
import { SERVER_URI } from "@/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { poolchallengeActions } from "@/store/poolchallenge";
import { IState } from "@/store";

const challenges = () => {
  const [data, setData] = useState<object[]>([]);
  const dispatch = useDispatch();
  const { model } = useSelector((state: IState) => state.poolchallenge);

  const getPoolChallengeData = () => {
    axios.get(`${SERVER_URI}/pool-game/index`).then((res) => {
      dispatch(poolchallengeActions.setModalData(res.data.models));
    });
  };

  useEffect(() => {
    getPoolChallengeData();
  }, []);

  useEffect(() => {
    setData(model);
  }, [model]);

  return (
    <div className="w-full">
      <Header />
      <section
        className="mt-6 px-3 xl:px-0 xl:mt-0 xl:container xl:mx-auto"
        style={{ marginTop: "1.5rem" }}
      >
        <h3 className="xl:text-2xl text-xl text-white font-bold ">
          Pool Challenges
        </h3>
        <p className="text-secondary-200 xl:text-sm text-xs">
          Accept and play some of the below F2E (Free to Earn) modes, earn $BITP
          and other Crypto
        </p>

        <div className="mt-5 xl:gap-11 flex w-full flex-col xl:flex-row  items-start justify-between">
          <div className="flex w-full flex-col gap-2">
            {data.length > 0 &&
              data.map((item, index) => (
                <PoolComponent key={index} quest={item} index={index} />
              ))}
            <Pagination />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default challenges;

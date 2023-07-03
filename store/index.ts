import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { challengeReducer } from "./challenge";
import { poolchallengeReducer } from "./poolchallenge";

export interface IState {
  auth: {
    currentUser: {
      id: string;
      email: string;
      password: string;
      username: string;
      firstname: string;
      lastname: string;
      money: {
        busd: number;
        usdt: number;
        usd: number;
        bitp: number;
        quest: number;
        cake: number;
      };
      address: {
        ether: { privateKey: string; address: string };
        bitcoin: { privateKey: string; address: string };
        tron: { privateKey: string; address: string };
      };
      index: number;
    };
    type: string;
  };
  challenge: {
    flag: boolean;
    model: object;
  };
  poolchallenge: {
    model: object[];
  };
}

const reducer = combineReducers({
  auth: authReducer,
  challenge: challengeReducer,
  poolchallenge: poolchallengeReducer,
});

const store = configureStore({
  reducer,
  middleware: () => getDefaultMiddleware(),
});

export default store;

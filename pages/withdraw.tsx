import { motion } from "framer-motion";
<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from "@/components";
import { IState } from '@/store';
import { SERVER_URI } from '@/config';
import { Table, Modal, notification } from 'antd';
import Axios from 'axios';
import moment from 'moment';
=======
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "@/components";
import { IState } from "@/store";
import { SERVER_URI } from "@/config";
import { Table, Modal, notification } from "antd";
import Axios from "axios";
import moment from "moment";
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
import Select from "@/components/Select";
import USDT from "@/public/usdt.png";
import QIC from "@/public/qc.png";
import Paypal from "@/public/paypal.png";
import BUSD from "@/public/busd.png";
import BITP from "@/public/bitp.png";
import { EmptyTransaction, Refresh } from "@/public/icons";
import classNames from "classnames";
import Footer from "@/components/Footer";
import { authActions } from "@/store/auth";
<<<<<<< HEAD
=======
import jwtDecode from "jwt-decode";
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2

const items = [
  {
    icon: BUSD,
    name: "BUSD",
  },
  {
    icon: USDT,
    name: "USDT",
  },
  {
    icon: Paypal,
    name: "USD",
  },
  {
    icon: BITP,
    name: "BITP",
  },
  {
    icon: QIC,
    name: "Quest Credit",
  },
];

const networks = [
  {
    name: "ETHEREUM",
  },
  {
    name: "BNB CHAIN",
  },
  {
    name: "TRON",
  },
];

const navs = ["DATE & TIME", "COIN", "AMOUNT", "ADDRESS"];

const Withdraw = () => {
<<<<<<< HEAD
  const [coin, setCoin] = useState('BUSD');
  const [network, setNetwork] = useState('ETHEREUM');
  const [withdrawalAddress, setWithdrawalAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const icon = useRef<object>({});
  const { currentUser } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  const withDrawAction = () => {
    if(currentUser) {
      Modal.confirm({
        title: 'Withdraw Action',
        content: 'Are you sure to withdraw?',
        onOk() {
          const payload = {coin, network, address: withdrawalAddress, user: currentUser._id, amount};
          Axios.post(`${SERVER_URI}/withdraw`, payload).then(res => {
            if(res.data.success) {
              notification.success({ message: 'Success!', description: 'You have successfully withdrawn' });
              localStorage.setItem('token', res.data.token);
              dispatch(authActions.setCurrentUser(res.data.user));
              setHistory(res.data.history);
            }
          });
        }
      })
    }
  }

  useEffect(() => {
    Axios.post(`${SERVER_URI}/withdraw/index`, { user: currentUser._id }).then(res => {
      setHistory(res.data.model);
    });
  }, []);

  if(coin !== '') {
    items.forEach(p => {
      if(coin === 'USD') {
        icon.current = p.icon;
      } 
      else if (coin === p.name) {
        icon.current = p.icon
      }
    })
=======
  const [coin, setCoin] = useState("BUSD");
  const [network, setNetwork] = useState("ETHEREUM");
  const [withdrawalAddress, setWithdrawalAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const icon = useRef<object>({});
  const [history, setHistory] = useState([]);
  const { currentUser } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  const getTransaction = () => {
    Axios.post(`${SERVER_URI}/withdrawHistory `, {
      user: currentUser.id,
    }).then((res) => {
      if (res) {
        setHistory(res.data.history);
      } else {
        console.log("failed");
        setHistory([]);
      }
    });
  };

  useEffect(() => {
    if (!currentUser) return;
    getTransaction();
  }, [currentUser]);

  const withDrawAction = () => {
    if (currentUser) {
      Modal.confirm({
        title: "Withdraw Action",
        content: "Are you sure to withdraw?",
        onOk() {
          const payload = {
            coin,
            network,
            address: withdrawalAddress,
            user: currentUser.id,
            amount,
          };
          Axios.post(`${SERVER_URI}/withdraw`, payload).then((res) => {
            if (res.data.success) {
              notification.success({
                message: "Success!",
                description: "You have successfully withdrawn",
              });
              getTransaction();
              localStorage.setItem("token", res.data.token);
              dispatch(authActions.setCurrentUser(jwtDecode(res.data.token)));
              // setHistory(res.data.history);
            } else {
              notification.error({
                message: "ERROR!",
                description: res.data.message,
              });
            }
          });
        },
      });
    }
  };

  if (coin !== "") {
    items.forEach((p) => {
      if (coin === "USD") {
        icon.current = p.icon;
      } else if (coin === p.name) {
        icon.current = p.icon;
      }
    });
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
  }

  return (
    <div className="w-full">
      <Header />
      <div className="container mx-auto px-4 lg:px-0">
        <div className="mt-16 lg:px-20 xl:px-40 grid grid-cols-1 lg:grid-cols-2 lg:gap-32 justify-center">
          <div>
            <div className="flex items-center gap-20">
              <h2 className="text-white font-bold text-2xl">
                WITHDRAW - {coin}
              </h2>
              <button className="flex lg:hidden bg-secondary-450 px-6 py-2 rounded-lg items-center text-white gap-3 font-bold text-base">
                <div>REFRESH</div>
                <Refresh />
              </button>
            </div>
            <div className="mt-10">
<<<<<<< HEAD
              {(coin && icon.current) && <Select
                key={0}
                name={coin === 'USD' ? 'USD' : coin}
                icon={icon.current}
                handleChange={(value) => setCoin(value)}
                items={items}
                label="WALLET BALANCE"
              />}
=======
              {coin && icon.current && (
                <Select
                  key={0}
                  name={coin === "USD" ? "USD" : coin}
                  icon={icon.current}
                  handleChange={(value) => setCoin(value)}
                  items={items}
                  label="WALLET BALANCE"
                />
              )}
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2

              {coin !== "USD" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={classNames(
                      "text-primary-1100 font-bold lg:text-base text-sm mb-1"
                    )}
                  >
                    WITHDRAWAL ADDRESS
                  </div>
                  <motion.input
                    type="text"
                    className="rounded w-full font-medium text-lg text-white px-5 xl:px-8 h-16 bg-secondary-400 outline-none"
<<<<<<< HEAD
                    onClick={(e: any) => setWithdrawalAddress(e.target.value)}
=======
                    onChangeCapture={(e: any) =>
                      setWithdrawalAddress(e.target.value)
                    }
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
                  />

                  <p className="font-medium mb-7 text-sm mt-2.5 text-white">
                    • You can deposit BUSD from anywhere. Include exchange
                    market
                  </p>

                  <Select
                    key={1}
                    name={network}
                    handleChange={(value) => setNetwork(value)}
                    items={networks}
                    label="SELECT NETWORK"
                  />

                  <div
                    className={classNames(
                      "text-primary-1100 font-bold lg:text-base text-sm mb-1"
                    )}
                  >
                    AMOUNT
                  </div>
                  <motion.input
                    type="number"
                    className="rounded w-full font-medium text-lg text-white px-5 xl:px-8 h-16 bg-secondary-400 outline-none"
<<<<<<< HEAD
                    onClick={(e: any) => setAmount(e.target.value)}
=======
                    onChangeCapture={(e: any) => setAmount(e.target.value)}
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
                  />
                </motion.div>
              )}

              {coin === "USD" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={classNames(
                      "text-primary-1100 font-bold lg:text-base text-sm mb-1"
                    )}
                  >
                    AMOUNT
                  </div>
                  <motion.input
                    type="number"
                    className="rounded mb-7 w-full font-medium text-lg text-white px-5 xl:px-8 h-16 bg-secondary-400 outline-none"
                  />

                  <div
                    className={classNames(
                      "text-primary-1100 font-bold lg:text-base text-sm mb-1"
                    )}
                  >
                    EMAIL ID
                  </div>
                  <motion.input
                    type="text"
                    className="rounded w-full font-medium text-lg text-white px-5 xl:px-8 h-16 bg-secondary-400 outline-none"
                  />
                </motion.div>
              )}

<<<<<<< HEAD
              <button className="my-14 w-full bg-secondary-450 px-8 py-3 rounded text-white font-bold text-lg" onClick={() => withDrawAction()}>
=======
              <button
                className="my-14 w-full bg-secondary-450 px-8 py-3 rounded text-white font-bold text-lg"
                onClick={() => withDrawAction()}
              >
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
                WITHDRAW FROM {coin === "USD" ? "PAYPAL" : coin} WALLET
              </button>
            </div>
          </div>
          <div>
            <button className="mb-12 hidden lg:flex bg-secondary-450 px-8 py-3 rounded items-center text-white gap-3 font-bold text-lg">
              <div>REFRESH</div>
              <Refresh />
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
              <div className="w-full">
                <h3 className="xl:text-2xl whitespace-nowrap text-lg font-bold text-white text-left">
                  TRANSACTION HISTORY
                </h3>
<<<<<<< HEAD
                <div className="grid mt-6 grid-cols-4 items-center gap-20 xl:gap-32">
                  {history.length && <Table size='middle' rowKey='_id' dataSource={history} pagination={false} columns={[
                    {title: 'COIN', dataIndex: 'coin' },
                    {title: 'AMOUNT', dataIndex: 'amount'},
                    {title: 'ADDRESS', dataIndex: 'address'},
                    {title: 'TIME', dataIndex: 'date', render: (text, record) => moment(text).format('YYYY-MM-DD')}
                  ]} />}
                </div>
                <div className="mt-20 xl:ml-28 flex w-full justify-center">
                  <EmptyTransaction />
=======
                <div className="flex items-center gap-32 mt-6">
                  <div className="grid grid-cols-4 items-center gap-20 xl:gap-28">
                    {history.length && (
                      <Table
                        size="middle"
                        rowKey="_id"
                        dataSource={history}
                        pagination={false}
                        columns={[
                          { title: "COIN", dataIndex: "coin" },
                          { title: "AMOUNT", dataIndex: "amount" },
                          { title: "ADDRESS", dataIndex: "address" },
                          {
                            title: "TIME",
                            dataIndex: "date",
                            render: (text, record) =>
                              moment(text).format("YYYY-MM-DD"),
                          },
                        ]}
                      />
                    )}
                  </div>
>>>>>>> 9ea9a21dc9375773cc5b0e05fe3af6135a7a56c2
                </div>
                {!history.length && (
                  <div className="mt-20 flex w-full justify-center">
                    <EmptyTransaction />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Withdraw;

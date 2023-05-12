import { Header } from "@/components";
import { useEffect, useState } from 'react'
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { IState } from "@/store";
import { notification } from "antd";
import { useRouter } from 'next/router'

export default function Home() {
  const [uid, setUid] = useState(0);
  const [cid, setCid] = useState('');
  const router = useRouter()
  const { currentUser } = useSelector((state: IState) => state.auth);

  useEffect(() => {
    const getFromLocalStorage = (key: string) => {
      if (!key || typeof window === "undefined" || !localStorage) {
        return "";
      }
      return window.localStorage.getItem(key);
    };

    const cid: any = getFromLocalStorage("cid");
    const uid: any = getFromLocalStorage('token');
    setCid(cid);
    setUid(jwtDecode(uid));
  }, []);

  if(!currentUser) {
    notification.warning({ message: 'Warning!', description: 'Please Login!' });
    router.push('/');
    return;
  }

  return (
    <div className="w-full">
      <Header />

      <div className="min-h-90vh w-full game-dashboard">

      {uid && cid && <iframe src={`https://portal.bitpool.gg/?c=${cid}&u=${uid}`} frameBorder="0" className="game-iframe" id="iframe"></iframe>}

      </div>
    </div>
  );
}

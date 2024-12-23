import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../contextApi/AuthProvider";

const useUser = () => {
  const [userData, setUserData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios(
        `https://boi-bazar-server-five.vercel.app/user/${user?.email}`
      ).then((data) => setUserData(data?.data));
    }
  }, [user?.email]);

  return userData;
};

export default useUser;

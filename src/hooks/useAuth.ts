import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "./../types/api/user";
import { useNavigate } from "react-router-dom";

import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin: isAdmin });
          showMessage({ title: "ログインしました", status: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
        setLoading(false);
      });
  }, []);
  return { login, loading };
};

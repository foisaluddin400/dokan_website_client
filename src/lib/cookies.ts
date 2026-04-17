import Cookies from "js-cookie";

// client side (not secure)
export const setToken = (token: string) => {
  Cookies.set("token", token);
};

export const getToken = () => {
  return Cookies.get("token");
};

export const removeToken = () => {
  Cookies.remove("token");
};
import { useSelector } from "react-redux";

const useAuth = () => {
  const authenticated = localStorage.getItem("auth");
  // return false;
  return authenticated;
};

export default useAuth;

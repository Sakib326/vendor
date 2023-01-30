const useAuth = () => {
  const authenticated = localStorage.getItem("auth");

  return authenticated ? true : true;
};

export default useAuth;

export const Login = () => {
  return (
    <div className="p-8 min-h-screen overflow-auto">
      <div className="auth_h_screen grid grid-cols-[1fr_650px] gap-12">
        <div className="flex items-end justify-center bg-[#F8F7FA] rounded-2xl pt-10">
          <img src="/images/auth/login.webp" alt="login" />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <img src="/images/misc/logo.webp" alt="logo" />
            </div>
            <h4 className="mb-2">Welcome to BDWinners</h4>
            <div>Please sign in to your account and start the adventure</div>
          </div>

          <form action="#" className="w-full">
            <input
              type="text"
              className="w-full border"
              placeholder="Full Name"
            />
            <button type="submit" className="btn btn-primary w-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

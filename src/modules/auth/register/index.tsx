export const Register = () => {
  return (
    <div className="p-8 min-h-screen overflow-auto">
      <div className="auth_h_screen grid grid-cols-[1fr_650px] gap-12">
        <div className="flex items-end justify-center bg-[#F8F7FA]  rounded-2xl pt-10">
          <img src="/images/auth/register.webp" alt="register" />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <img src="/images/misc/logo.webp" alt="logo" />
            </div>
            <h4 className="mb-2">Registration Form</h4>
            <div>
              Lorem ipsum dolor sit amet consectetur. Aliquam lectus in.
            </div>
          </div>

          <form action="#" className="w-full">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              <div className="form_group col-span-2">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Full Name" className="error" />
                <div className="error">Required Field</div>
              </div>
              <div className="form_group">
                <label htmlFor="">Email Address</label>
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="form_group">
                <label htmlFor="">Mobile Number</label>
                <input type="text" placeholder="Mobile Number" />
              </div>
              <div className="form_group">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="form_group">
                <label htmlFor="">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-5">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

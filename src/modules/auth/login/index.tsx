import { message, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSignInMutation } from "../../../redux/auth/auth_api";

export const Login = () => {
  const [signIn, { data, isLoading, isError }] = useSignInMutation();
  const navigate = useNavigate();

  const signInInit = {
    email: "",
    password: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const vendorSignIn = async (values: any) => {
    await signIn({
      email: values?.email,
      password: values?.password,
      remember: true,
    }).then((res: any) => {
      if (!res?.error) {
        navigate("/dashboard");
      } else {
        message.error(
          res?.error?.data?.message ??
            "Something went wrong. Try reload the page"
        );
      }
    });
  };

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

          <Formik
            initialValues={signInInit}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              vendorSignIn(values);
            }}
          >
            {({ handleSubmit, setFieldValue, errors, values, touched }) => (
              <Form className="w-full">
                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                  <div className="form_group col-span-2">
                    <label htmlFor="">
                      Email Address <span className="astrisk">*</span>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className={errors?.email && touched?.email && "error"}
                      placeholder="Email Address"
                      value={values?.email ?? ""}
                    />
                    {errors?.email && touched?.email ? (
                      <div className="error">{errors?.email}</div>
                    ) : null}
                  </div>
                  <div className="form_group col-span-2">
                    <label htmlFor="">
                      Password <span className="astrisk">*</span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="font-normal text-sm  text-[#7367f0] absolute right-0 top-[-20px]  hover:underline"
                    >
                      Forgot Password?
                    </Link>
                    <Field
                      type="password"
                      name="password"
                      className={
                        errors?.password && touched?.password && "error"
                      }
                      placeholder="Password"
                      value={values?.password ?? ""}
                    />
                    {errors?.password && touched?.password ? (
                      <div className="error">{errors?.password}</div>
                    ) : null}
                  </div>
                </div>

                {/* <div className="mt-5 text-sm">
              <Checkbox onChange={onChange}>Remember Me </Checkbox>
            </div> */}
                <button
                  onClick={() => handleSubmit}
                  type="submit"
                  className="btn btn-primary w-full mt-5 mb-4"
                  disabled={isLoading}
                >
                  {isLoading && <Spin className="custom_spinner" />}
                  Sign In
                </button>
                <div className="text-center text-sm">
                  New on our platform?{" "}
                  <Link
                    to="/register"
                    className="text-[#7367f0] hover:underline"
                  >
                    Create an account
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

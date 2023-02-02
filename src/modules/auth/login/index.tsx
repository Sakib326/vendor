import { message, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  useGetProfileQuery,
  useSignInMutation,
} from "../../../redux/auth/auth_api";

export const Login = () => {
  const [type, setType] = useState("password");
  const [signIn, { data, isLoading, isError }] = useSignInMutation();
  const [isProfileGet, setIsProfileGet] = useState(true);
  const { data: profileData } = useGetProfileQuery("init", {
    skip: isProfileGet,
  });
  console.log({ profileData });

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
        setIsProfileGet(false);
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
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
      <div className="auth_h_screen grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] lg:gap-6 xl:gap-12">
        <div className="hidden lg:flex lg:items-center xl:items-end justify-center bg-[#F8F7FA] rounded-2xl pt-10">
          <img src="/images/auth/login.webp" alt="login" />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-5 md:p-12 md:px-[70px] lg:p-12">
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
                  <div className="form_group col-span-2 relative">
                    <label htmlFor="">
                      Password <span className="astrisk">*</span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="font-normal text-sm  text-[#7367f0] absolute right-0 top-[-20px]  hover:underline"
                    >
                      Forgot Password?
                    </Link>
                    <div className="relative">
                      <Field
                        type={`${type}`}
                        name="password"
                        className={`${
                          errors?.password && touched?.password ? "error" : ""
                        } !pr-11`}
                        placeholder="Password"
                        value={values?.password ?? ""}
                      />
                      <div
                        className="password_view"
                        onClick={() =>
                          setType(type == "password" ? "text" : "password")
                        }
                      >
                        {type === "password" && (
                          <AiOutlineEye className="text-lg" />
                        )}
                        {type == "text" && (
                          <AiOutlineEyeInvisible className="text-lg" />
                        )}
                      </div>
                    </div>
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

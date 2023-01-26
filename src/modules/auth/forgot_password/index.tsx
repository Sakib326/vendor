import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { message, Spin } from "antd";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useForgotPassMutation } from "../../../redux/auth/auth_api";
export const ForgotPassword = () => {
  const [forgotPass, { data, isLoading, isError }] = useForgotPassMutation();
  const [userEmail, setUserEmail] = useState("");
  const [tryAgainClicked, setTryAgainClicked] = useState(false);

  const forgotPassInit = {
    email: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
  });

  const vendorForgotPass = async (values: any) => {
    await forgotPass({
      email: values?.email,
    }).then((res: any) => {
      if (!res?.error) {
        message.success("Successful. Check your email");
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
          <img src="/images/auth/forgot-password.webp" alt="forgot-password" />
        </div>
        {!isError && tryAgainClicked ? (
          <div className="flex flex-col h-full items-center justify-center p-12">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center">
                <img src="/images/misc/logo.webp" alt="logo" />
              </div>
              <h4 className="mb-2">Check Your Email</h4>
              <div>
                We have sent a password reset link to{" "}
                <span className="font-semibold">{userEmail}</span>. pelase check
                your email to proceed
              </div>
            </div>
            {isLoading ? (
              <Spin />
            ) : (
              <div className="text-center text-sm">
                Did’t receive an email?{" "}
                <span
                  onClick={() => {
                    setTryAgainClicked(true);
                    vendorForgotPass({ email: userEmail });
                  }}
                  className="text-[#7367f0] hover:underline cursor-pointer"
                >
                  Try Again
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-full items-center justify-center p-12">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center">
                <img src="/images/misc/logo.webp" alt="logo" />
              </div>
              <h4 className="mb-2">Forgot Password?</h4>
              <div>
                Enter your email, and we'll send you instructions to reset your
                password
              </div>
            </div>

            <Formik
              initialValues={forgotPassInit}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                vendorForgotPass(values);
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
                        onChange={(e: any) => {
                          setFieldValue("email", e?.target?.value);
                          setUserEmail(e?.target?.value);
                        }}
                      />
                      {errors?.email && touched?.email ? (
                        <div className="error">{errors?.email}</div>
                      ) : null}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setTryAgainClicked(true);
                      handleSubmit();
                    }}
                    type="submit"
                    className="btn btn-primary w-full mt-5 mb-4"
                    disabled={isLoading}
                  >
                    {isLoading && <Spin className="custom_spinner" />}
                    Send Reset Link
                  </button>
                  <div className="flex items-center justify-center text-center text-sm">
                    <Link
                      to="/login"
                      className="text-[#7367f0] hover:underline flex items-center gap-1"
                    >
                      <FiChevronLeft /> Back to login
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

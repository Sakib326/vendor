import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { useForgotPassChangeMutation } from "../../../redux/auth/auth_api";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import queryString from "query-string";
import { message, Spin } from "antd";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [forgotPassChange, { isLoading }] = useForgotPassChangeMutation();
  const parsedLinkQuery = queryString.parse(location.search);
  const navigate = useNavigate();

  const forgotPassInit = {
    password: "",
    confirmPassword: "",
  };
  // Validation schema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const vendorForgotPass = async (values: any) => {
    if (!parsedLinkQuery?.token) return;
    await forgotPassChange({
      token: parsedLinkQuery?.token,
      password: values?.password,
      confirmPassword: values?.confirmPassword,
    }).then((res: any) => {
      if (!res?.error) {
        message.success("Successful. Your password has been changed");
        navigate("/login");
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
          <img src="/images/auth/reset-password.webp" alt="reset-password" />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-5 md:p-12 md:px-[70px] lg:p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <img src="/images/misc/logo.webp" alt="logo" />
            </div>
            <h4 className="mb-2">Reset Password</h4>
            <div>for {parsedLinkQuery?.email}</div>
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
                      Password <span className="astrisk">*</span>
                    </label>
                    <div className="relative">
                      <Field
                        type={`${passwordType}`}
                        name="password"
                        className={`${
                          errors?.password && touched?.password && "error"
                        } !pr-11`}
                        placeholder="New Password"
                        value={values?.password ?? ""}
                      />
                      <div
                        className="password_view"
                        onClick={() =>
                          setPasswordType(
                            passwordType == "password" ? "text" : "password"
                          )
                        }
                      >
                        {passwordType === "password" && (
                          <AiOutlineEye className="text-lg" />
                        )}
                        {passwordType == "text" && (
                          <AiOutlineEyeInvisible className="text-lg" />
                        )}
                      </div>
                    </div>
                    {errors?.password && touched?.password ? (
                      <div className="error">{errors?.password}</div>
                    ) : null}
                  </div>
                  <div className="form_group col-span-2">
                    <label htmlFor="">
                      Confirm Password <span className="astrisk">*</span>
                    </label>
                    <div className="relative">
                      <Field
                        type={`${confirmPasswordType}`}
                        name="confirmPassword"
                        className={`${
                          errors?.confirmPassword &&
                          touched?.confirmPassword &&
                          "error"
                        } !pr-11`}
                        placeholder="Confirm Password"
                        value={values?.confirmPassword ?? ""}
                      />
                      <div
                        className="password_view"
                        onClick={() =>
                          setConfirmPasswordType(
                            confirmPasswordType == "password"
                              ? "text"
                              : "password"
                          )
                        }
                      >
                        {confirmPasswordType === "password" && (
                          <AiOutlineEye className="text-lg" />
                        )}
                        {confirmPasswordType == "text" && (
                          <AiOutlineEyeInvisible className="text-lg" />
                        )}
                      </div>
                    </div>
                    {errors?.confirmPassword && touched?.confirmPassword ? (
                      <div className="error">{errors?.confirmPassword}</div>
                    ) : null}
                  </div>
                </div>

                <button
                  onClick={() => handleSubmit}
                  type="submit"
                  className="btn btn-primary w-full mt-5 mb-4"
                  disabled={isLoading}
                >
                  {isLoading && <Spin className="custom_spinner" />}
                  Set new password
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
      </div>
    </div>
  );
};

export default ResetPassword;

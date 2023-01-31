import { Checkbox, message, Spin } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Field, Form, Formik } from "formik";
import queryString from "query-string";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useSignUpMutation } from "../../../redux/auth/auth_api";

export const Register = () => {
  const navigate = useNavigate();
  const [signUp, { isLoading, error }] = useSignUpMutation();
  const [userEmail, setUserEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const regInit = {
    businessName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    businessName: Yup.string()
      .required("Field is required")
      .max(255, "Must be equal or less than 255 character"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Must be more than or equal 6 characters")
      .required("Password is required")
      .matches(
        /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,}$/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),

    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(
        /(^(\+8801|8801|01|008801))[3-9]{1}(\d){8}$/,
        "Mobile number not valid."
      )
      .typeError("Mobile number not valid. Only number allowed"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    terms: Yup.bool().oneOf(
      [true],
      "Accept privacy policy & terms is required"
    ),
  });

  const vendorRegistration = async (values: any) => {
    try {
      await signUp({
        businessName: values?.businessName,
        mobile: `${values?.mobile}`,
        email: values?.email,
        password: values?.password,
      }).then((res: any) => {
        if (!res?.error) {
          message.success(
            "Registration successful. Check your email to verify"
          );
          navigate(`/verification?email=${userEmail}`);
        } else {
          message.error(
            res?.error?.data?.message ??
              "Something went wrong. Try reload the page"
          );
          setErrorMessage(res?.error?.data?.message);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-8 min-h-screen overflow-auto">
      <div className="auth_h_screen grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] lg:gap-6 xl:gap-12">
        <div className="hidden lg:flex lg:items-center xl:items-end justify-center bg-[#F8F7FA] rounded-2xl pt-10">
          <img src="/images/auth/register.webp" alt="register" />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-5 md:p-12 md:px-[70px] lg:p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <img src="/images/misc/logo.webp" alt="logo" />
            </div>
            <h4 className="mb-2">Registration Form</h4>
            <div>Create your account and start the adventure.</div>
          </div>
          <Formik
            initialValues={regInit}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              vendorRegistration(values);
            }}
          >
            {({ handleSubmit, setFieldValue, errors, values, touched }) => (
              <Form className="w-full">
                {errorMessage && (
                  <div
                    className="col-span-4 p-4 mb-6 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                  >
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                  <div className="form_group col-span-2">
                    <label htmlFor="">
                      Full Name <span className="astrisk">*</span>
                    </label>
                    <Field
                      type="text"
                      placeholder="Full Name"
                      name="businessName"
                      className={
                        errors?.businessName && touched?.businessName && "error"
                      }
                      value={values?.businessName ?? ""}
                      autoComplete="off"
                    />
                    {errors?.businessName && touched?.businessName ? (
                      <div className="error">{errors?.businessName}</div>
                    ) : null}
                  </div>
                  <div className="form_group">
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
                      autoComplete="off"
                    />
                    {errors?.email && touched?.email ? (
                      <div className="error">{errors?.email}</div>
                    ) : null}
                  </div>
                  <div className="form_group">
                    <label htmlFor="">
                      Mobile Number <span className="astrisk">*</span>
                    </label>
                    <Field
                      name="mobile"
                      className={errors?.mobile && touched?.mobile && "error"}
                      placeholder="Mobile Number"
                      value={values?.mobile ?? ""}
                      autoComplete="off"
                    />
                    {errors?.mobile && touched?.mobile ? (
                      <div className="error">{errors?.mobile}</div>
                    ) : null}
                  </div>
                  <div className="form_group">
                    <label htmlFor="">
                      Password <span className="astrisk">*</span>
                    </label>
                    <Field
                      type="password"
                      name="password"
                      className={
                        errors?.password && touched?.password && "error"
                      }
                      placeholder="Password"
                      value={values?.password ?? ""}
                      autoComplete="new-password"
                    />
                    {errors?.password && touched?.password ? (
                      <div className="error">{errors?.password}</div>
                    ) : null}
                  </div>
                  <div className="form_group">
                    <label htmlFor="">
                      Confirm Password <span className="astrisk">*</span>
                    </label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className={
                        errors?.confirmPassword &&
                        touched?.confirmPassword &&
                        "error"
                      }
                      placeholder="Confirm Password"
                      value={values?.confirmPassword ?? ""}
                      autoComplete="new-password"
                    />
                    {errors?.confirmPassword && touched?.confirmPassword ? (
                      <div className="error">{errors?.confirmPassword}</div>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5 text-sm">
                  <Checkbox
                    onChange={(e) => {
                      setFieldValue("terms", e?.target?.checked);
                    }}
                  >
                    I agree to{" "}
                  </Checkbox>
                  <Link to="#" className="text-[#7367f0] hover:underline">
                    privacy policy & terms
                  </Link>
                  {errors?.terms && touched?.terms ? (
                    <div className="error">{errors?.terms}</div>
                  ) : null}
                </div>
                <button
                  onClick={() => handleSubmit}
                  type="submit"
                  className="btn btn-primary w-full mt-5 mb-4"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <Spin
                      className="custom_spinner"
                      style={{ color: "#fff" }}
                    />
                  )}
                  Sign Up
                </button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#7367f0] hover:underline">
                    Sign in instead
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

export default Register;

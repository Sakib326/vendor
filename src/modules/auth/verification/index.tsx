import { Form, message, Spin } from "antd";
import { Field, Formik } from "formik";
import queryString from "query-string";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLazySignUpVerificatonQuery } from "../../../redux/auth/auth_api";
export const Verification = () => {
  const parsedLinkQuery = queryString.parse(location.search);
  const [signUpVerificaton, { data, isLoading, isError }] =
    useLazySignUpVerificatonQuery();
  const navigate = useNavigate();
  // Validation schema
  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Security code is required."),
  });

  const vendorActiveAcc = async (values: any) => {
    await signUpVerificaton(values?.token).then((res: any) => {
      if (!res?.error || res?.error?.originalStatus === 200) {
        message.success(
          "Email verify successful. Sign in to your account and start the adventure"
        );
        navigate(`/login`);
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
          <img src="/images/auth/verification.webp" alt="verification" />
        </div>

        <div className="flex flex-col h-full items-center justify-center p-5 md:p-12 md:px-[70px] lg:p-12">
          <div className="mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <img src="/images/misc/logo.webp" alt="logo" />
            </div>
            <h4 className="mb-2">Check Your Email</h4>
            <div>
              We sent a verification code to{" "}
              <span className="font-semibold">
                {parsedLinkQuery?.email ?? "email"}
              </span>
              . Enter the code from the email in the field below.
            </div>
          </div>

          <div className="text-left self-start font-medium mb-2 text-black">
            Type your security code
          </div>
          <Formik
            initialValues={{ token: parsedLinkQuery?.token ?? "" }}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              vendorActiveAcc(values);
            }}
          >
            {({ handleSubmit, errors, values, touched }) => (
              <Form className="w-full">
                <div className="form_group">
                  <Field
                    type="token"
                    name="token"
                    className={`w-full ${errors?.token && "error"}`}
                    placeholder="Security Code"
                    value={values?.token}
                  />
                  {errors?.token && touched?.token ? (
                    <div className="error">{errors?.token}</div>
                  ) : null}
                </div>
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  type="submit"
                  className="btn btn-primary w-full mt-5 mb-4"
                  disabled={isLoading}
                >
                  {isLoading && <Spin className="custom_spinner" />}
                  Verify My Account
                </button>

                <div className="flex items-center justify-center text-center text-sm gap-1">
                  Didn't get the code?{" "}
                  <button
                    type="button"
                    className="text-[#7367f0] hover:underline flex items-center gap-1"
                  >
                    Resend
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Verification;

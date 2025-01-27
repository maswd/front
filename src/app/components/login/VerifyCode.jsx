import React, { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import AuthCode from "react-auth-code-input";
import { checkPhone } from "../../services/userService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ConfirmPhone() {
  const LoginContext = useContext(context);
  const { setOtp, otp, handleCode } = LoginContext;
  const form = useSelector((state) => state.form);
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const code = setInterval(() => {
      setCounter((oldCounter) => (oldCounter === 0 ? 0 : oldCounter - 1));
    }, 1000);
    return () => {
      clearInterval(code);
    };
  }, [setCounter]);

  const sendCodeAgain = async () => {
    const res = await checkPhone(localStorage.getItem("phone"));
    setCounter(60);
  };

  return (
    <>
      <div className="container">
          <div className="col-xl-10 col-lg-12 col-md-9  mx-auto ">
            <div className="card o-hidden border-0 my-2">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-12  col-lg-6  d-block bg-login-image">
                    {" "}
                  </div>
                  <div className="col-12 col-lg-6 ">
                    <div className="p-lg-5 my-lg-5">
                      <div className="text-center pb-lg-2">
                        <h1 className="h4 text-gray-900 mb-4">
                          تایید شماره تلفن
                        </h1>
                      </div>
                      <form
                        className="p-2 user"
                        onSubmit={handleCode}
                        style={{ direction: "ltr" }}
                      >
                        <AuthCode
                          allowedCharacters="numeric"
                          length={5}
                          inputClassName="input"
                          fields={5}
                          containerClassName=" mb-3 text-center w-100 "
                          value={otp}
                          onChange={(e) => {
                            setOtp(e);
                          }}
                        />

                        <div className="p-3">
                          <button
                            type="submit"
                            disabled={otp.length !== 5 || form.isSubmitting}
                            className="btn btn-warning btn-user btn-block shadow-sm mx-auto "
                          >
                            تایید
                          </button>
                        </div>
                        <Link className=" btn text-xs" to="/login">
                          بازگشت به ورود / ثبت نام
                        </Link>
                        <hr />
                        <div className="mx-3">
                          <button
                            onClick={sendCodeAgain}
                            type="button"
                            className="btn text-primary btn-sm"
                            hidden={counter !== 0 ? true : false}
                          >
                            درخواست مجدد کد
                          </button>
                          <small
                            className={`${
                              counter === 0 && "d-none"
                            } font-weight-bold text-xs`}
                          >
                            اعتبار کد <span> {counter} ثانیه </span>
                          </small>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default React.memo(ConfirmPhone);

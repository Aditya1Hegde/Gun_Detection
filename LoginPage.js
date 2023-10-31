import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPageLaptop = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onTextButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/home-page-laptop");
  }, [navigate]);

  const onText2Click = useCallback(() => {
    navigate("/home-page-laptop");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onText3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className="relative bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1629px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-left text-sm text-absolute-white font-lexend"
      data-animate-on-scroll
    >
      <div className="absolute top-[30px] left-[calc(50%_-_640px)] rounded-81xl bg-grey-11 box-border w-[1280px] flex flex-row items-center justify-between py-3.5 px-6 border-[1px] border-solid border-gray-100">
        <div className="relative w-[116.9px] h-[30px] z-[0] text-6xl">
          <img
            className="absolute h-full w-[25.66%] top-[-1.33%] right-[74.34%] bottom-[1.33%] left-[0%] max-w-full overflow-hidden max-h-full mix-blend-normal"
            alt=""
            src="/shape30.svg"
          />
          <div className="absolute h-4/5 w-[218.14%] top-[-1.67%] left-[40.21%] leading-[150%] inline-block">
            Guardian Angel
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[20px] z-[1]">
          <div
            className="relative leading-[150%] cursor-pointer"
            onClick={onTextButtonClick}
          >
            Sign Up
          </div>
          <div className="rounded-63xl bg-greenyellow flex flex-row items-center justify-start py-3 px-6 text-grey-11">
            <div className="relative leading-[150%]">Login</div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_61.5px)] flex flex-row items-center justify-start gap-[26px] z-[2]">
          <div className="relative leading-[150%]">Home</div>
          <div className="relative leading-[150%]">Security</div>
        </div>
      </div>
      <div className="absolute bottom-[521px] left-[134px] rounded-2xl w-[1172px] h-[924px] flex flex-col items-start justify-start py-20 px-[200px] box-border gap-[60px] bg-[url('/public/login@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-19xl text-greenyellow">
        <img
          className="absolute my-0 mx-[!important] top-[1px] right-[0px] w-[418px] h-[395px] z-[0]"
          alt=""
          src="/abstract-design1.svg"
        />
        <div className="self-stretch flex flex-col items-center justify-center gap-[16px] z-[1]">
          <div className="self-stretch relative font-medium">Login</div>
          <div className="self-stretch relative text-base font-light text-grey-75">
            Welcome back! Please log in to access your account.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px] z-[2] text-sm text-gray-100">
          <div className="self-stretch flex flex-row items-center justify-start gap-[24px]">
            <Form className="[border:none] bg-[transparent] flex-1">
              <Form.Label>Enter your Email</Form.Label>
              <Form.Control type="text" />
            </Form>
            <Form className="[border:none] bg-[transparent] flex-1">
              <Form.Label>Enter your Password</Form.Label>
              <Form.Control type="text" />
            </Form>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-[130px] gap-[24px]">
            <div
              className="self-stretch rounded-44xl bg-greenyellow flex flex-row items-center justify-start py-3.5 px-6 cursor-pointer"
              onClick={onButtonContainer1Click}
            >
              <div
                className="flex-1 relative leading-[150%] cursor-pointer"
                onClick={onText2Click}
              >
                Login
              </div>
            </div>
            <div
              className="self-stretch rounded-44xl bg-gray-100 flex flex-row items-center justify-start py-3.5 px-6 cursor-pointer text-absolute-white border-[1px] border-solid border-darkslategray"
              onClick={onButtonContainer2Click}
            >
              <div
                className="flex-1 relative leading-[150%] cursor-pointer"
                onClick={onText3Click}
              >
                Sign Up
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-grey-70">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-grey-70" />
                <div className="relative leading-[150%]">Or Continue with</div>
                <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-grey-70" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[20px]">
                <div className="rounded-51xl [background:linear-gradient(180deg,_rgba(202,_255,_51,_0.05),_rgba(202,_255,_51,_0))] flex flex-row items-start justify-start p-2">
                  <div className="rounded-31xl [background:linear-gradient(180deg,_rgba(202,_255,_51,_0.1),_rgba(202,_255,_51,_0)_46.77%)] flex flex-row items-start justify-start p-3.5">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon6.svg"
                    />
                  </div>
                </div>
                <div className="rounded-51xl [background:linear-gradient(180deg,_rgba(202,_255,_51,_0.05),_rgba(202,_255,_51,_0))] flex flex-row items-start justify-start p-2">
                  <div className="rounded-31xl [background:linear-gradient(180deg,_rgba(202,_255,_51,_0.1),_rgba(202,_255,_51,_0)_46.77%)] flex flex-row items-start justify-start p-3.5">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon7.svg"
                    />
                  </div>
                </div>
                <div className="rounded-51xl [background:linear-gradient(180deg,_rgba(202,_255,_51,_0.05),_rgba(202,_255,_51,_0))] flex flex-row items-start justify-start p-2">
                  <div className="rounded-31xl [background:linear-gradient(180deg,_rgba(202,_255,_51,_0.1),_rgba(202,_255,_51,_0)_46.77%)] flex flex-row items-start justify-start p-3.5">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon8.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] bg-grey-11 w-[1440px] flex flex-col items-center justify-start pt-[60px] px-20 pb-[30px] box-border gap-[40px] text-base text-white-shades-90">
        <div className="relative w-[215px] h-[34px] text-6xl text-absolute-white">
          <img
            className="absolute h-full w-[18.14%] top-[0%] right-[74.19%] bottom-[0%] left-[7.67%] max-w-full overflow-hidden max-h-full mix-blend-normal"
            alt=""
            src="/shape301.svg"
          />
          <h2 className="m-0 absolute h-[70.59%] w-[191.02%] top-[0%] left-[27.35%] text-inherit leading-[150%] font-normal font-inherit inline-block">
            <p className="m-0">Guardian Angel</p>
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[14px]">
            <div className="relative leading-[150%]">Home</div>
            <div className="relative leading-[150%]">Security</div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch flex flex-row items-center justify-center gap-[20px]">
          <div className="rounded-md flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/icon.svg"
            />
            <div className="relative leading-[150%]">
              Guardianangel@gmail.com
            </div>
          </div>
          <div className="rounded-md flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/icon1.svg"
            />
            <div className="relative leading-[150%]">+333 666 999</div>
          </div>
          <div className="rounded-md flex flex-row items-center justify-start gap-[6px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/icon2.svg"
            />
            <div className="relative leading-[150%]">INDIA</div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-100" />
        <div className="self-stretch rounded-81xl bg-gray-200 flex flex-row items-center justify-between py-3 pr-6 pl-3 text-sm text-grey-70 border-[1px] border-solid border-gray-100">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="rounded-81xl bg-greenyellow flex flex-col items-start justify-start p-3">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/icon3.svg"
              />
            </div>
            <div className="rounded-81xl bg-greenyellow flex flex-col items-start justify-start p-3">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/icon9.svg"
              />
            </div>
            <div className="rounded-81xl bg-greenyellow flex flex-col items-start justify-start p-3">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/icon10.svg"
              />
            </div>
          </div>
          <div className="relative leading-[150%] font-light">
            All Rights Reserved
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="relative leading-[150%] font-light">
              Privacy Policy
            </div>
            <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-grey-70" />
            <div className="relative leading-[150%] font-light">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageLaptop;

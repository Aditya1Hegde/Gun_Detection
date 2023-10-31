import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePageLaptop = () => {
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

  return (
    <div
      className="relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1677px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
      data-animate-on-scroll
    >
      <nav className="m-0 absolute top-[42px] left-[calc(50%_-_640px)] rounded-81xl bg-dimgray box-border w-[1280px] flex flex-row items-center justify-between py-3.5 px-6 text-left text-6xl text-absolute-white font-lexend border-[1px] border-solid border-gray-100">
        <div className="relative w-[116.9px] h-[30px]">
          <img
            className="absolute h-full w-[25.66%] top-[-1.33%] right-[74.34%] bottom-[1.33%] left-[0%] max-w-full overflow-hidden max-h-full mix-blend-normal"
            alt=""
            src="/shape30.svg"
          />
          <h1 className="m-0 absolute h-4/5 w-[59.88%] top-[-15%] left-[29.08%] text-inherit leading-[150%] font-normal font-inherit inline-block">
            PFD
          </h1>
        </div>
        <section className="flex flex-row items-center justify-start gap-[26px] text-left text-sm text-absolute-white font-lexend">
          <div
            className="relative leading-[150%] cursor-pointer"
            onClick={onTextButtonClick}
          >
            Home
          </div>
          <div className="rounded-63xl bg-gray-100 flex flex-row items-center justify-start py-2.5 px-[18px]">
            <div className="relative leading-[150%]">Security</div>
          </div>
        </section>
      </nav>
      <a className="[text-decoration:none] absolute top-[194px] left-[110px] rounded-31xl bg-gainsboro w-[1746px] h-[1275px]" />
    </div>
  );
};

export default HomePageLaptop;

import { useEffect } from "react";

const FrameComponent = ({ onClose }) => {
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
  return (
    <div
      className="rounded-31xl bg-gray-200 shadow-[0px_4px_250px_rgba(0,_0,_0,_0.25)] w-[884px] h-[625px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full max-h-full text-center text-21xl text-absolute-black font-lexend"
      data-animate-on-scroll
    >
      <div className="absolute top-[284px] left-[18px] w-[847px] h-[282px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] rounded-6xl bg-greenyellow w-[406px] h-[282px] overflow-hidden">
          <h2 className="m-0 absolute top-[24px] left-[28px] text-inherit leading-[150%] font-bold font-inherit inline-block w-[350px] h-[89px]">
            AMBULANCE
          </h2>
          <button className="cursor-pointer [border:none] py-3.5 px-6 bg-absolute-black absolute top-[113px] left-[103px] rounded-63xl flex flex-row items-center justify-start">
            <b className="relative text-11xl leading-[150%] inline-block font-lexend text-absolute-white text-center w-[152px] h-[34px] shrink-0">{`CALL `}</b>
          </button>
        </div>
        <div className="absolute top-[0px] left-[446px] rounded-6xl bg-greenyellow w-[401px] h-[282px] overflow-hidden">
          <h2 className="m-0 absolute top-[22px] left-[61px] text-inherit leading-[150%] font-bold font-inherit inline-block w-[279px] h-[68px]">
            POLICE
          </h2>
          <button className="cursor-pointer [border:none] py-3.5 px-6 bg-absolute-black absolute top-[110px] left-[101px] rounded-63xl flex flex-row items-center justify-start">
            <b className="relative text-11xl leading-[150%] inline-block font-lexend text-absolute-white text-center w-[152px] h-[34px] shrink-0">{`CALL `}</b>
          </button>
        </div>
      </div>
      <header className="absolute top-[0px] left-[166px] w-[698px] h-[193px] overflow-hidden text-center text-[50px] text-red font-lexend">
        <h2 className="m-0 absolute top-[64px] left-[0px] text-inherit leading-[150%] font-bold font-inherit inline-block w-[551px] h-[129px]">
          GUN DETECTED!!!
        </h2>
        <div className="absolute h-[25.13%] w-[6.38%] top-[12.54%] right-[3.18%] bottom-[62.33%] left-[90.44%]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/vector.svg"
            onClick={onClose}
          />
        </div>
      </header>
    </div>
  );
};

export default FrameComponent;

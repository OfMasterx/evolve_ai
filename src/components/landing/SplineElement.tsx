import Spline from '@splinetool/react-spline';
import { isMobile } from 'react-device-detect';

const SplineElement = () => {
  return (
    <div
      className={`flex relative justify-center items-center min-[640px]:mt-0 mt-8 z-10 w-full lg:w-1/3  h-[406px]`}
    >
      <Spline
        className={`sm:min-w-[406px] `}
        scene="https://prod.spline.design/moDxSU2YolLqofps/scene.splinecode"
      />
      <div
        className={`absolute inset-0 ${
          isMobile ? 'block' : 'hidden'
        } bg-white opacity-0 transition-opacity duration-300 ease-out rounded-full`}
      ></div>
    </div>
  );
};

export default SplineElement;

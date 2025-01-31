import Phases from './phases/Phases';
import FooterLinks from './FooterLinks';
import HeadTextBlock from './HeadTextBlock';
import { lazy } from 'react';
const SplineElement = lazy(() => import('./SplineElement'));

const Landing = () => {
  return (
    <div className="bg-black text-white w-full px-6 flex flex-col items-center">
      <div className="border w-full border-white-25 flex flex-col max-w-[1280px] min-[1920px]:max-w-[66.6vw] min-h-fit h-[calc(100vh-112px-112px)]">
        <div className="flex border-b border-white-25 flex-col-reverse h-full justify-center lg:min-h-[469px] lg:flex-row lg:justify-around items-center">
          <div className="w-1/12"></div>
          <HeadTextBlock />
          <div className="w-1/12"></div>
          <SplineElement />
          <div className="w-1/12 "></div>
        </div>
        <Phases />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Landing;

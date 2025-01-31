import Spline from '@splinetool/react-spline';
import Phases from './phases/Phases';
import FooterLinks from './FooterLinks';

const Landing = () => {
  return (
    <div className="bg-black text-white w-full px-6 flex flex-col items-center">
      <div className="border w-full border-white-25 flex flex-col max-w-[1280px] min-[1920px]:max-w-[66.6vw] min-h-fit md:h-[calc(100vh-80px-112px)] lg:h-[calc(100vh-80px-112px)]">
        <div className="flex border-b border-white-25 flex-col-reverse h-full justify-center lg:min-h-[469px] lg:flex-row lg:justify-around items-center">
          <div className="w-1/12"></div>
          <div className="flex overflow-visible items-center md:items-start md:justify-start flex-col py-16 lg:py-0 w-10/12 md:w-full lg:w-5/12">
            <h1
              className="w-fit pm-0 md:pl-[25%] lg:pl-0
             min-[500px]:leading-[40px]  min-[500px]:text-[36px]
               min-[1125px]:text-[42px] text-[24px] leading-[32px]
              min-[1125px]:leading-[51px] xl:text-[48px] xl:leading-[60px]"
            >
              <span>Evolve AI.</span>
              <br />{' '}
              <span className="whitespace-nowrap">Empower creation.</span>
            </h1>
            <div className="flex md:w-full justify-center md:justify-end pr-0 md:pr-[25%] lg:pr-0">
              <button className="relative mt-6 px-6 py-3 text-white group whitespace-nowrap">
                Apply for Early Access
                <span className="absolute top-0 right-0 w-6 h-[1px] bg-custom-red transition-all group-hover:w-4"></span>
                <span className="absolute top-0 right-0 h-6 w-[1px] bg-custom-red transition-all group-hover:h-4"></span>
              </button>
            </div>
          </div>
          <div className="w-1/12"></div>
          <div className="flex justify-center items-center z-10 w-full lg:w-1/3  h-[406px]">
            <Spline
              className="sm:min-w-[406px]"
              scene="https://prod.spline.design/moDxSU2YolLqofps/scene.splinecode"
            />
          </div>
          <div className="w-1/12"></div>
        </div>
        <Phases />
      </div>
      <FooterLinks />
    </div>
  );
};

export default Landing;

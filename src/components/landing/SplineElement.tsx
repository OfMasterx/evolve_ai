import Spline from '@splinetool/react-spline';

const SplineElement = () => {
  return (
    <div className="flex justify-center items-center min-[640px]:mt-0 mt-8 z-10 w-full lg:w-1/3  h-[406px]">
      <Spline
        className="sm:min-w-[406px]"
        scene="https://prod.spline.design/moDxSU2YolLqofps/scene.splinecode"
      />
    </div>
  );
};

export default SplineElement;

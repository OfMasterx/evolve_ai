const HeadTextBlock = () => {
  return (
    <div className="flex overflow-visible items-center md:items-start md:justify-start flex-col py-16 lg:py-0 w-10/12 md:w-full lg:w-5/12">
      <h1
        className="w-fit pm-0 md:pl-[25%] lg:pl-0
             min-[500px]:leading-[40px]  min-[500px]:text-[36px]
               min-[1125px]:text-[42px] text-[24px] leading-[32px]
              min-[1125px]:leading-[51px] xl:text-[48px] xl:leading-[60px]"
      >
        <span>Evolve AI.</span>
        <br /> <span className="whitespace-nowrap">Empower creation.</span>
      </h1>
      <div className="flex md:w-full justify-center md:justify-end pr-0 md:pr-[25%] lg:pr-0">
        <button className="relative mt-32 px-6 py-3 text-white group whitespace-nowrap">
          APPLY FOR EARLY ACCESS
          <span className="absolute top-0 right-0 w-6 h-[1px] bg-red transition-all group-hover:w-4"></span>
          <span className="absolute top-0 right-0 h-6 w-[1px] bg-red transition-all group-hover:h-4"></span>
        </button>
      </div>
    </div>
  );
};

export default HeadTextBlock;

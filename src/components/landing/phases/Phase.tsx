import { isMobile } from 'react-device-detect';

interface PhaseProps {
  title: string;
  info: string;
  index: number;
  description?: string;
}

const Phase: React.FC<PhaseProps> = ({ title, info, description, index }) => {
  const imageUrl = `${import.meta.env.BASE_URL}phases/phase${index}.svg`;
  if (isMobile) {
    return (
      <div className="h-fit min-h-full bg-black w-full text-white flex flex-col p-8">
        <div className="flex w-full justify-end items-end">
          <img
            src={imageUrl}
            alt="Arrow"
            className="w-16 h-16 group-hover:rotate-180 transition-all duration-500"
          />
        </div>
        <p className="text-2xl font-chivo-mono-thiner pt-[30px]">{title}</p>
        <p className="text-xl">{info}</p>
        {description && (
          <p className="text-sm pt-2 font-chivo-mono-light">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="h-[218px] bg-black w-full group overflow-hidden relative text-white">
      <div className="absolute p-8 group-hover:-top-[126px] top-0 left-0 w-full h-full transition-all duration-300">
        <div className="flex justify-end items-end">
          <img
            src={imageUrl}
            alt="Arrow"
            className="w-16 h-16 group-hover:rotate-180 transition-all duration-300"
          />
        </div>
        <div className="flex flex-col items-start pt-[30px]">
          <p className="text-start font-chivo-mono-thiner text-2xl leading-[30px] group-hover:opacity-0 transition-all duration-300">
            {title}
          </p>
          <p className="text-start text-2xl lg:text-xl leading-[30px] min-[1170px]:text-2xl whitespace-nowrap">
            {info}
          </p>
          <p className="text-start text-[12px] font-chivo-mono-light leading-[18px] pt-10 group-hover:pt-4 transition-all duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Phase;

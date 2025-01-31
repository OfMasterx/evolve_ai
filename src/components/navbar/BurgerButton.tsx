import { Dispatch, SetStateAction } from 'react';

const BurgerButton = ({
  setMenuOpen,
  menuOpen,
  isInBurger,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  isInBurger?: boolean;
}) => {
  return (
    <button
      className={`relative  w-6 h-6  flex items-center justify-center ${
        isInBurger ? 'z-20' : 'lg:hidden'
      }`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span
        className={`absolute transition-opacity transform text-2xl ${
          menuOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        ☰
      </span>
      <span
        className={`absolute transition-opacity transform text-2xl duration-300 ${
          menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        ✕
      </span>
    </button>
  );
};

export default BurgerButton;

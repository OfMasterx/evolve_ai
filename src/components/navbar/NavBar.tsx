import { useEffect, useState } from 'react';
import Logo from './Logo';
import BurgerButton from './BurgerButton';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScrollLock = (event: Event) => {
      event.preventDefault();
    };

    if (menuOpen) {
      setScrollPosition(window.scrollY);

      window.addEventListener('scroll', handleScrollLock);
      window.addEventListener('wheel', handleScrollLock, { passive: false });
      window.addEventListener('touchmove', handleScrollLock, {
        passive: false,
      });
    } else {
      window.removeEventListener('scroll', handleScrollLock);
      window.removeEventListener('wheel', handleScrollLock);
      window.removeEventListener('touchmove', handleScrollLock);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollLock);
      window.removeEventListener('wheel', handleScrollLock);
      window.removeEventListener('touchmove', handleScrollLock);
    };
  }, [menuOpen, scrollPosition]);

  return (
    <nav className="flex relative justify-center items-center px-6 py-4 bg-black text-white">
      <div className="flex justify-between items-center max-w-[1280px] min-[1920px]:max-w-[66.6vw] w-full">
        <Logo />
        <ul className="hidden lg:flex w-fit">
          <li>
            <a href="#" className="nav-item">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Create
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Incubator
            </a>
          </li>
          <li>
            <a href="#" className="nav-item">
              Docs
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <button className="px-4 py-3  hover:text-custom-red transition-colors">
            BUY $MORPH
          </button>
          <button className="bg-custom-red  hover:text-custom-red hover:bg-white px-4 py-2  transition-colors">
            CONNECT WALLET{' '}
          </button>
        </div>
      </div>
      <BurgerButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div
        className={`fixed top-0 w-screen h-screen ${
          menuOpen ? 'z-[15]' : '-z-[1]'
        } backdrop-blur-xl transition-all`}
      ></div>

      <div
        className={`fixed w-full ${
          menuOpen ? '-top-2' : '-top-100'
        } left-0 z-20 bg-black text-white space-y-4 p-6 transition-all duration-[0.6s] ease-in-out`}
      >
        <div className="flex justify-between items-center max-w-[1280px] w-full">
          <Logo />
          <BurgerButton
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            isInBurger
          />
        </div>
        <ul
          className={`w-full flex flex-col justify-between h-full gap-8 pt-4`}
        >
          <li>
            <a href="#" className="hover:text-custom-red">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-custom-red">
              Create
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-custom-red">
              Incubator
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-custom-red">
              Docs
            </a>
          </li>
          <li>
            <button className=" px-4 py-2 w-full bg-custom-red hover:text-custom-red hover:bg-white transition-colors">
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

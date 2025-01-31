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
    <nav className="flex relative justify-center items-center px-6 py-8 bg-black text-white">
      <div className="flex justify-between items-center max-w-[1280px] min-[1920px]:max-w-[66.6vw] w-full">
        <Logo />
        <ul className="hidden lg:flex w-fit">
          <li>
            <a href="#" className="nav-item soon">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="nav-item soon">
              Create
            </a>
          </li>
          <li>
            <a href="#" className="nav-item soon">
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
          <button
            style={{ cursor: 'not-allowed' }}
            disabled
            className="px-4 py-3 relative text-white/25 cursor-not-allowed transition-colors"
          >
            BUY $MORPH
          </button>
          <button className="bg-red  hover:text-red hover:bg-white px-4 py-2  transition-colors">
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
        className={`fixed w-full h-screen ${
          menuOpen ? 'top-0' : '-top-[100%]'
        } left-0 z-20 bg-black text-white space-y-4 px-6 py-8 transition-all duration-[0.6s] ease-in-out`}
      >
        <div className="flex justify-between items-center w-full">
          <Logo />
          <BurgerButton
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
            isInBurger
          />
        </div>
        <ul
          className={`w-full flex flex-col h-[calc(100vh-176px-12px)] gap-8 pt-8`}
        >
          <li>
            <a href="#" className="hover:text-red relative soon-mobile">
              Explore
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red relative soon-mobile">
              Create
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red relative soon-mobile">
              Incubator
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red">
              Docs
            </a>
          </li>
          <li className="pt-8">
            <a href="#" className="hover:text-red relative soon-mobile">
              BUY $MORPH
            </a>
          </li>
        </ul>
        <button className="px-4 py-3 w-full bg-red hover:text-red hover:bg-white transition-colors">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

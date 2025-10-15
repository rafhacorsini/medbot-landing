import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', to: 'hero' },
  { name: 'Funcionalidades', to: 'features' },
  { name: 'Preços', to: 'pricing' },
  { name: 'Sobre', to: 'about' },
  { name: 'FAQ', to: 'faq' },
  { name: 'Contato', to: 'footer' },
];

const NavLink: React.FC<{ to: string; name: string; offset?: number; onClick?: () => void }> = ({ to, name, offset = -80, onClick }) => {
  const location = useLocation(); // This is kept as it is used below
  const navigate = useNavigate();
  const className = "font-sans text-gray-300 relative cursor-pointer transition-all duration-300 hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:scale-x-110";
  const mobileClassName = "font-sans text-xl text-gray-300 transition-colors duration-300 hover:text-white hover:underline";

  const handleNavigate = () => {
    if (onClick) onClick();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page transition
    }
  };

  return (
    <ScrollLink to={to} smooth={true} spy={true} duration={500} offset={offset} className={onClick ? mobileClassName : className} onClick={handleNavigate}>
      {name}
    </ScrollLink>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20, staggerChildren: 0.07 } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
  } as const;

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  } as const;

  return (
    <motion.header className="sticky top-0 z-50 w-full bg-gray-900/80 backdrop-blur-md transition-all duration-300 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 sm:px-8">
        {/* Logo */}
        <RouterLink to="/" className="flex items-center gap-2 cursor-pointer relative z-10">
          <motion.div
            className="absolute -left-2 -top-2 w-12 h-12 rounded-full bg-blue-500/30 blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Bot className="text-blue-500" size={28} />
          <span className="text-2xl font-bold text-white">MedBot</span>
        </RouterLink>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} name={link.name} />
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="#pricing"
          className="hidden md:inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-sans font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
        >
          Começar Agora
        </a>

        {/* Botão Hamburger Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-white" aria-label="Abrir menu de navegação">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900/95 p-8 shadow-xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-8">
                <span className="text-2xl font-bold text-white">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-white" aria-label="Fechar menu de navegação">
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col items-start gap-8">
                {navLinks.map((link) => (
                  <motion.div key={link.to} variants={linkVariants}>
                    <NavLink to={link.to} name={link.name} onClick={() => setIsMenuOpen(false)} />
                  </motion.div>
                ))}

                <motion.div variants={linkVariants} className="w-full pt-6">
                  <a
                    href="#pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full rounded-full bg-gradient-to-r from-primary to-secondary py-3 text-center font-sans font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
                  >
                    Começar Agora
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

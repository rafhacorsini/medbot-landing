import React from 'react';
import { Bot, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/seu-usuario', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/in/seu-usuario', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
];

const productLinks = [
  { name: 'Funcionalidades', to: 'features' },
  { name: 'Preços', to: 'pricing' },
  { name: 'Como Funciona', to: 'how-it-works' },
  { name: 'FAQ', to: 'faq' },
];

const companyLinks = [
  { name: 'Sobre', to: 'about' },
  { name: 'Blog', to: '/blog', isExternal: true }, // Link para página futura
  { name: 'Contato', to: 'footer' },
  { name: 'Termos de Uso', to: '/termos', isExternal: true },
  { name: 'Privacidade', to: '/privacidade', isExternal: true },
];

const FooterLink: React.FC<{ to: string; children: React.ReactNode; isExternal?: boolean }> = ({ to, children, isExternal, ...props }) => {
  const className = "text-muted-dark hover:text-primary transition-colors cursor-pointer";
  const location = useLocation();
  const navigate = useNavigate();

  if (isExternal) {
    return <RouterLink to={to} className={className}>{children}</RouterLink>;
  }

  const handleNavigate = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <ScrollLink to={to} smooth={true} spy={true} duration={500} offset={-80} className={className} onClick={handleNavigate}>
      {children}
    </ScrollLink>
  );
};

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-background-dark text-content-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Logo e Social */}
          <div className="space-y-4">
            <RouterLink to="/" className="flex items-center gap-2 cursor-pointer">
              <Bot className="text-primary" size={28} />
              <span className="text-2xl font-bold text-white">MedBot</span>
            </RouterLink>
            <p className="text-muted-dark">Seu mentor de estudos no WhatsApp.</p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label} className="text-muted-dark hover:text-primary transition-colors">
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Produto */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Produto</h3>
            <ul className="space-y-3">
              {productLinks.map(link => <li key={link.name}><FooterLink to={link.to}>{link.name}</FooterLink></li>)}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => <li key={link.name}><FooterLink to={link.to} isExternal={link.isExternal}>{link.name}</FooterLink></li>)}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 text-muted-dark">
              <li className="flex items-start gap-3"><Mail size={18} className="text-primary mt-1 flex-shrink-0" /><span>contato@medbot.com</span></li>
              <li className="flex items-start gap-3"><Phone size={18} className="text-primary mt-1 flex-shrink-0" /><span>+55 11 99999-9999</span></li>
              <li className="flex items-start gap-3"><MapPin size={18} className="text-primary mt-1 flex-shrink-0" /><span>São Paulo, SP - Brasil</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-sm text-muted-dark">&copy; {new Date().getFullYear()} MedBot. Todos os direitos reservados.</p>
          <div className="text-sm text-muted-dark mt-2 sm:mt-0 flex items-center gap-2">
            <RouterLink to="/termos" className="hover:text-primary transition-colors">Termos</RouterLink>
            <span className="mx-2">|</span>
            <RouterLink to="/privacidade" className="hover:text-primary transition-colors">Privacidade</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

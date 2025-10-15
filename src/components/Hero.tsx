import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

const ParallaxIcons: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  }); // scrollYProgress is used by useTransform, which is now removed. Let's remove this too.

  return (
    <div ref={targetRef} className="absolute inset-0 z-0">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.15),rgba(96,122,251,0))]"></div>
      <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.15),rgba(139,92,246,0))]"></div>
    </div>
  );
};

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  } as const;
  const mockupVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 } },
  } as const;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-background-dark text-content-dark pt-24 lg:pt-0"
    >
      <ParallaxIcons />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Conteúdo */}
          <motion.div className="lg:w-3/5 text-center lg:text-left" variants={containerVariants} initial="hidden" animate="visible">
            
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 max-w-max mx-auto lg:mx-0 mb-4">
              <ShieldCheck size={18} className="text-success" />
              <span className="font-sans text-sm font-semibold text-content-dark">Já aprovamos +150 residentes</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight relative">
              Sua
              <span className="relative inline-block mx-2 text-primary font-black font-serif italic">
                {"Aprovação".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.5 + index * 0.15,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              na Residência Médica <br className="hidden sm:block lg:hidden" /> Começa Aqui
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl text-muted-dark mt-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Chatbot de IA no WhatsApp que treina você todos os dias com questões, explicações detalhadas e acompanhamento personalizado.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 font-sans font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110"
              >
                Começar Teste Grátis
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 font-sans font-semibold text-content-dark bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Ver Como Funciona
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div 
            className="relative lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0" 
            variants={mockupVariants} 
            initial="hidden" 
            animate="visible">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm max-h-sm bg-[radial-gradient(ellipse_at_center,rgba(96,122,251,0.25),transparent_60%)] -z-10"></div>
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
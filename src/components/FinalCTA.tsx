import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Lock, MessageCircle, CalendarClock } from 'lucide-react';

const ParallaxShapes: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-30%']);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-[15%] left-[10%] w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[20%] right-[15%] w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
    </div>
  );
};

const TrustBadge: React.FC<{ icon: React.ElementType; text: string; delay: number }> = ({ icon: Icon, text, delay }) => (
  <motion.div
    className="flex items-center gap-2 text-sm text-muted-dark"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Icon size={16} className="text-success" />
    <span>{text}</span>
  </motion.div>
);

const FinalCTA: React.FC = () => {
  const getCurrentMonth = () => {
    return new Date().toLocaleString('pt-BR', { month: 'long' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="cta-final" className="relative w-full overflow-hidden bg-background-dark py-20 sm:py-28">
      {/* Fundo Gradiente Consistente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.15),rgba(96,122,251,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.15),rgba(139,92,246,0))]"></div>
        <ParallaxShapes />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Comece Hoje Sua Jornada <br className="sm:hidden" /> Para Aprovação
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-4 text-lg md:text-xl text-muted-dark max-w-2xl mx-auto">
            Junte-se a centenas de residentes que já estão estudando de forma inteligente.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 font-sans font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Iniciar Teste Grátis de 7 Dias <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#"
              className="w-full sm:w-auto px-8 py-4 font-sans font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar com Suporte
            </motion.a>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-4 text-sm text-muted-dark">
            Não é necessário cartão de crédito.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <TrustBadge icon={ShieldCheck} text="Seguro" delay={0.5} />
              <TrustBadge icon={Lock} text="Dados Criptografados" delay={0.6} />
              <TrustBadge icon={MessageCircle} text="Suporte 24/7" delay={0.7} />
            </div>
            <div className="flex justify-center items-center gap-2 text-sm text-primary/80 font-medium pt-4">
              <CalendarClock size={16} />
              <span>Últimas vagas para a turma de {getCurrentMonth()}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;

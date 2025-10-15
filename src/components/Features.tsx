import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sun, Mic, BarChart4, Trophy } from 'lucide-react';

interface JourneyStep {
  period: string;
  title: string;
  description: string;
  Icon: any;
}

const journeyData: JourneyStep[] = [
  { period: 'MANHÃ - 7h', title: 'Acorda', description: '5 questões no WhatsApp', Icon: Sun },
  { period: 'TARDE - 14h', title: 'Dúvida', description: 'por áudio na pausa', Icon: Mic },
  { period: 'NOITE - 20h', title: 'Revisa', description: 'desempenho', Icon: BarChart4 },
  { period: 'FIM DE SEMANA', title: 'Simulado', description: 'completo', Icon: Trophy },
];

const TimelineItem = ({ item, index }: { item: JourneyStep; index: number }) => {
  const isOdd = index % 2 !== 0;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <motion.div 
      className="w-full"
      variants={itemVariants}
    >
      <div className={`group rounded-2xl bg-gradient-to-br from-black/30 to-black/10 p-6 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${isOdd ? 'md:text-right' : 'md:text-left'}`}>
        <p className="text-xs font-mono uppercase tracking-wider text-primary/80 group-hover:text-primary transition-colors">
          {item.period}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white group-hover:text-primary/90 transition-colors">
          {item.title}
        </h3>
        <p className="mt-2 text-base text-gray-400 group-hover:text-gray-300 transition-colors">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
  };

  return (
    <section id="features" className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-white py-20 sm:py-32">
      {/* Fundo Gradiente Melhorado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.12),rgba(96,122,251,0))] blur-3xl"></div>
        <div className="absolute bottom-0 right-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.12),rgba(139,92,246,0))] blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.05),rgba(96,122,251,0))] blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Seu Dia a Dia Rumo à Aprovação
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Acompanhe como o MedBot se integra perfeitamente na sua rotina de estudos
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="w-full space-y-0">
            {journeyData.map((item, index) => {
              const isLast = index === journeyData.length - 1;
              const isOdd = index % 2 !== 0;
              
              return (
                <div key={index} className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center gap-x-4 md:gap-x-8">
                  {/* Card Esquerdo (desktop) ou Card Direito (mobile) */}
                  <div className={isOdd ? 'md:col-start-3' : 'md:col-start-1'}>
                    <TimelineItem item={item} index={index} />
                  </div>
                  
                  {/* Linha e Ícone Central */}
                  <div className="relative flex flex-col items-center h-full row-start-1 md:col-start-2">
                    <div className={`w-0.5 h-full absolute ${index === 0 ? 'top-1/2' : ''} ${isLast ? 'bottom-1/2' : ''} bg-gradient-to-b from-blue-500/20 to-purple-500/20`}></div>
                    <motion.div 
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-4 ring-[#0f0f1a] backdrop-blur-sm border border-blue-500/30 z-10 shadow-lg shadow-blue-500/20"
                      variants={iconVariants}
                    >
                      <item.Icon className="h-8 w-8 text-blue-400" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
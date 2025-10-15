import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Bot, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Inicie seu Teste Gratuito',
    description: 'Cadastre-se em segundos e comece seu teste de 7 dias. Sem compromisso, sem necessidade de cartão.',
  },
  {
    icon: Bot,
    title: 'Treine com a IA no WhatsApp',
    description: 'Receba questões diárias, tire dúvidas e siga um plano de estudos personalizado diretamente no seu chat.',
  },
  {
    icon: TrendingUp,
    title: 'Acompanhe e Conquiste',
    description: 'Monitore seu desempenho com nossas análises e chegue no dia da prova mais preparado do que nunca.',
  },
];

const StepCard: React.FC<{ step: typeof steps[0]; index: number }> = ({ step, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
  };

  return (
    <motion.div
      className="relative flex flex-col items-center text-center p-8 bg-black/20 border border-white/10 rounded-2xl backdrop-blur-lg"
      variants={cardVariants}
    >
      <div className="absolute -top-6 bg-background-dark p-2 rounded-full">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary">
          <step.icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="mt-8 font-display text-xl font-bold text-white">{step.title}</h3>
      <p className="mt-2 text-muted-dark">{step.description}</p>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative w-full overflow-hidden bg-background-dark py-20 sm:py-28">
      {/* Fundo Gradiente Consistente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.1),rgba(96,122,251,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.1),rgba(139,92,246,0))]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Sua Aprovação em 3 Passos
          </h2>
          <p className="mt-4 text-lg text-muted-dark max-w-2xl mx-auto">
            Começar a estudar de forma inteligente com o MedBot é rápido e fácil.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

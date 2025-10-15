import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Mensal',
    price: { monthly: 'R$49', yearly: 'R$39' },
    description: 'Ideal para começar e explorar os recursos principais.',
    features: [
      'Acesso ao banco de questões',
      'Simulados semanais',
      'Suporte da comunidade',
    ],
    isFeatured: false,
  },
  {
    name: 'Anual',
    price: { monthly: 'R$35', yearly: 'R$29' },
    description: 'Desbloqueie todo o potencial com todos os recursos e economize.',
    features: [
      'Acesso ao banco de questões completo',
      'Simulados ilimitados',
      'Suporte prioritário 24/7',
      'Análise de desempenho',
    ],
    isFeatured: true,
  },
  {
    name: 'Semestral',
    price: { monthly: 'R$42', yearly: 'R$33' },
    description: 'Uma opção equilibrada para uma preparação dedicada.',
    features: [
      'Acesso ao banco de questões completo',
      'Simulados ilimitados',
      'Suporte prioritário 24/7',
    ],
    isFeatured: false,
  },
];

const PricingCard: React.FC<{ plan: typeof plans[0]; isYearly: boolean; delay: number }> = ({ plan, isYearly, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay } },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`relative flex flex-col rounded-xl p-8 backdrop-blur-lg transition-transform duration-300 hover:scale-105 ${
        plan.isFeatured
          ? 'border-2 border-primary bg-black/30 shadow-glow-primary'
          : 'border border-white/10 bg-black/20'
      }`}
    >
      {plan.isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
          <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-background-dark">
            Mais Popular
          </span>
        </div>
      )}
      <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-white transition-all duration-300">
          {isYearly ? plan.price.yearly : plan.price.monthly}
        </span>
        <span className="text-sm font-semibold leading-6 tracking-wide text-muted-dark">/mês</span>
      </p>
      <p className="mt-6 text-sm leading-6 text-muted-dark">{plan.description}</p>
      <button
        className={`mt-8 w-full rounded-lg py-3 text-sm font-semibold text-white transition ${
          plan.isFeatured
            ? 'bg-gradient-to-r from-primary to-secondary shadow-lg hover:brightness-110'
            : 'bg-white/10 hover:bg-white/20'
        }`}
      >
        Escolher Plano
      </button>
      <ul className="mt-8 space-y-4 text-sm leading-6 text-muted-dark">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex gap-x-3">
            <Check
              className={`h-6 w-6 flex-none ${plan.isFeatured ? 'text-primary' : 'text-primary'}`}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section id="pricing" className="relative w-full overflow-x-hidden bg-background-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.15),rgba(96,122,251,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.15),rgba(139,92,246,0))]"></div>
      </div>

      <div className="relative z-10 flex h-full grow flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 sm:py-28">
        <div className="w-full max-w-6xl">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Encontre o plano perfeito para você
            </h2>
            <p className="mt-4 font-body text-lg text-muted-dark">
              Comece sua jornada para o sucesso na prova de residência com o MedBot.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-4">
            <span className={`font-body text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-muted-dark'}`}>
              Mensal
            </span>
            <label htmlFor="billing-toggle" className="relative inline-flex cursor-pointer items-center">
              <input
                id="billing-toggle"
                type="checkbox"
                className="peer sr-only"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="peer h-7 w-12 rounded-full bg-surface-dark/50 after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-600 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-gray-700"></div>
            </label>
            <span className={`font-body text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-muted-dark'}`}>
              Anual <span className="hidden sm:inline-block text-primary">(Economize 20%)</span>
            </span>
          </div>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} plan={plan} isYearly={isYearly} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

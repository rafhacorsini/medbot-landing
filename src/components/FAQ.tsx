import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Como funciona o período de teste?',
    answer:
      'Você pode experimentar o MedBot gratuitamente por 7 dias. Durante este período, você terá acesso a todas as funcionalidades para ver como ele pode te ajudar a se preparar para as provas de residência.',
  },
  {
    question: 'Preciso ter conhecimento técnico para usar?',
    answer:
      'Absolutamente não! O MedBot foi projetado para ser intuitivo e fácil de usar. Se você sabe usar um chat, você saberá usar o MedBot.',
  },
  {
    question: 'As questões são atualizadas?',
    answer:
      'Sim, nossa base de dados é constantemente atualizada com as últimas questões de provas de residência de todo o país, garantindo que seu estudo esteja sempre em dia.',
  },
  {
    question: 'Como posso entrar em contato com o suporte?',
    answer:
      'Nosso suporte está disponível 24/7. Você pode entrar em contato através do chat dentro da plataforma ou pelo email suporte@medbot.com.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'Aceitamos os principais cartões de crédito (Visa, MasterCard, Amex) e também pagamentos via PIX para sua conveniência.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer:
      'Sim, você pode cancelar sua assinatura a qualquer momento, sem taxas ou burocracia. O cancelamento é feito diretamente no seu painel de usuário.',
  },
];

const FaqItem: React.FC<{
  item: typeof faqData[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="group rounded-lg bg-white dark:bg-subtle-dark p-6 shadow-sm ring-1 ring-subtle-light dark:ring-subtle-dark/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300">
      <button
        onClick={onClick}
        className="flex w-full cursor-pointer list-none items-center justify-between text-left"
      >
        <span className="text-base font-semibold text-content-light dark:text-content-dark">
          {item.question}
        </span>
        <ChevronDown
          className={`h-6 w-6 transform text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="text-base leading-relaxed text-content-light/80 dark:text-content-dark/80">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-content-light dark:text-content-dark sm:text-4xl font-display">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg leading-8 text-content-light/80 dark:text-content-dark/80">
            Tudo que você precisa saber antes de começar
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
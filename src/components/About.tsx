import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import medicaGif from './images/medica.gif';

const BenefitItem: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => (
  <motion.li
    className="flex items-start gap-4"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true, amount: 0.8 }}
  >
    <CheckCircle2 className="w-6 h-6 text-success mt-1 flex-shrink-0" />
    <div>
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-muted-dark mt-1">{description}</p>
    </div>
  </motion.li>
)

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 sm:py-28 bg-background-light dark:bg-background-dark text-content-light dark:text-content-dark">
      <div className="max-w-6xl w-full mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Texto Persuasivo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-light dark:text-content-dark">
              Deixe a IA ser seu maior <span className="text-primary">aliado</span> nos estudos
            </h2>
            <p className="mt-6 text-lg text-content-light/80 dark:text-content-dark/80 leading-relaxed">
              Sabemos que a jornada até a residência pode ser solitária e exaustiva. É por isso que o MedBot não é apenas uma ferramenta, é o seu mentor pessoal de estudos, disponível 24/7 diretamente no seu WhatsApp.
            </p>
            <ul className="mt-8 space-y-6">
              <BenefitItem
                title="Tire dúvidas complexas, a qualquer hora."
                description="Preso em uma questão às 2 da manhã? Mande um áudio ou texto e receba uma explicação clara e didática em segundos."
                delay={0.2}
              />
              <BenefitItem
                title="Entendimento, não decoreba."
                description="Nossa IA foi treinada para explicar o raciocínio por trás das respostas, conectando temas e fortalecendo sua base de conhecimento."
                delay={0.4}
              />
              <BenefitItem
                title="Seu ritmo, suas regras."
                description="O MedBot se adapta ao seu nível e foca nos seus pontos fracos, garantindo que cada minuto de estudo seja o mais eficiente possível."
                delay={0.6}
              />
            </ul>
          </motion.div>

          {/* Coluna da Direita: Imagem */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full max-w-md aspect-square bg-subtle-dark/50 rounded-2xl shadow-2xl p-4 border border-white/10">
              <img
                src={medicaGif}
                alt="Médica utilizando o MedBot para estudos"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
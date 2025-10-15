import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "O MedBot foi essencial para minha aprovação. A capacidade de simular provas e receber feedback instantâneo me deu uma vantagem enorme.",
    name: 'Dra. Ana Souza',
    achievement: 'Aprovada na USP-SP',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8UTaIYVaDMA32Olej-exHzioC5ldoJiqvbZb6YwnfjiR3Oe8DORDHRlqCDmVsqwazpkvejHy4JENfT3Sc0XarUrnQziRlrC3_tvktm_Q7fjx2MdYIxMOvjTy-3vsgfunKMZ9yuLzJk5Q7Plz3kjjdxWF84cnKA1nfzu7LN-RqMREeFCv1YZzLa1os5BCl1TaSPciVdoYRM1uoPacqf-CM-Y-Au9wSohva50RmP3imF_x0-UXklqElnwAGwFrpdjd8jJQeAD6bj1A',
  },
  {
    quote: "A interface intuitiva e a variedade de questões me ajudaram a focar nos meus pontos fracos e a otimizar meu tempo de estudo.",
    name: 'Dr. Lucas Ferreira',
    achievement: 'Aprovado na UNIFESP',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdWyN2Lne6QM-q2lwuTIPiX19v38e2sPpINf59qLcP0XlFvyT9IvvnmnqnlblcCG2ZzfuuUMR0_qxzueE4JMbD2frFc3v1rtKGWvpyDHQRgR5aBQfDtvkGgiRhMN4xZwqZHLGZW2-V6inTmyqvbJjV3Hv6ARKm8IhZXyU5MeuD94LnzBnlU59c84rSOv5kWwdKP1RST1obxvLemYsaNx6FLQAISg06yuzHQNGJZxGE8tUb4N58RamKWIm0iixdXzJdt0PeWEQF7HM',
  },
  {
    quote: "Recomendo o MedBot a todos os meus colegas. É uma ferramenta indispensável para quem busca a aprovação na residência.",
    name: 'Dra. Beatriz Lima',
    achievement: 'Aprovada na UERJ',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5drM0zgVHsdUkVAspOeiC6RHbSen6DWkZ4ZYfyou4V0jYeYPtn-rGXMENU8ZMhYrb9bPftcXRhKrA1mczZ5LGhLT9ZVPrLDiF_1w8bhB2o_48iqrJQA8riJOYVagYCidaN1Or_gP8izCoMHI38CVT02EeD_cJHB3E54PPc7g5bVhes9tJg7wzE8H3qFT-yKPLJv2McVsS0weWjJaGMeqj_k3A1gscdp30fj_La9tsAvHFcJQ4kA9mS8JpuDw1NZQER2RSHD0lSo8',
  },
  {
    quote: "A plataforma é incrivelmente completa. Os resumos e os flashcards interativos foram um diferencial na minha preparação.",
    name: 'Dr. Rafael Costa',
    achievement: 'Aprovado na Santa Casa',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu5tCPynvOuUIQ0Oe6_2KgJtz4P-M50a9aNp2CRH2ilDJpFBcpBPQnf0dNiVPLaWSe8xbvhWYt16R3-A3FZAR8wvLFPU-sc3nwRz4OEWXaLauiGATpAuAbs454ErVyXqPKE3D-nKv30i2ZDBvK71l6Tmat4lhSMAhoa2HkisY5QA4w97t-fuN6N-Tthchk_wE6zjvWosvv1re3nMzsXIlDTtuGgysbiwkuQrc5EnUVglQ63vQLrnM4ExqvtytbQYXrhY1v9-O5iGI',
  },
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const testimonialIndex = ((page % testimonials.length) + testimonials.length) % testimonials.length;

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-background-dark py-20 sm:py-28">
      {/* Fundo Gradiente */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(96,122,251,0.15),rgba(96,122,251,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,0.15),rgba(139,92,246,0))]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            O que nossos <br className="sm:hidden" /> alunos dizem
          </h2>
          <p className="mt-4 text-lg text-muted-dark max-w-2xl mx-auto">
            Histórias de sucesso de estudantes que alcançaram a aprovação com a ajuda do MedBot.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto h-[320px] sm:h-[280px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) paginate(1);
                else if (swipe > 10000) paginate(-1);
              }}
              className="absolute w-full max-w-2xl"
            >
              <div className="relative bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 h-full flex flex-col justify-between font-body">
                <Quote className="absolute top-6 right-6 w-24 h-24 text-primary/10 transform -scale-x-100" />
                <div className="relative z-10 flex-grow">
                  <p className="text-slate-300 mb-6 italic text-lg sm:text-xl">
                    "{testimonials[testimonialIndex].quote}"
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <img alt={testimonials[testimonialIndex].name} className="w-12 h-12 rounded-full object-cover" src={testimonials[testimonialIndex].avatarUrl} />
                  <div>
                    <p className="font-bold text-white">{testimonials[testimonialIndex].name}</p>
                    <p className="text-sm text-primary">{testimonials[testimonialIndex].achievement}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > testimonialIndex ? 1 : -1])}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${testimonialIndex === i ? 'bg-primary' : 'bg-primary/30 hover:bg-primary/50'}`}
              aria-label={`Ver depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

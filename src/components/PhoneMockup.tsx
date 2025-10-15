import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const PhoneMockup: React.FC = () => (
  <div className="relative mx-auto w-[300px] h-[600px]">
    {/* Moldura do iPhone */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[50px] shadow-2xl">
      {/* Borda interna brilhante */}
      <div className="absolute inset-[3px] bg-black rounded-[47px] shadow-inner"></div>
    </div>
    
    {/* Notch do iPhone */}
    <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[20px] z-20">
      <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[50px] h-[5px] bg-gray-800 rounded-full"></div>
      <div className="absolute top-[8px] right-[15px] w-[8px] h-[8px] bg-gray-700 rounded-full"></div>
    </div>
    
    {/* Tela/Conteúdo */}
    <div className="absolute inset-[14px] bg-gray-900 rounded-[36px] overflow-hidden">
      <div className="w-full h-full p-4 flex flex-col overflow-hidden">
      {/* Header do chat */}
      <div className="flex items-center pb-3 border-b border-white/10">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
          <Bot size={24} className="text-gray-900" />
        </div>
        <div>
          <p className="font-sans font-bold text-white text-sm">MedBot</p>
          <p className="font-sans text-xs text-green-500">online</p>
        </div>
      </div>
      
      {/* Mensagens */}
      <div className="flex-grow space-y-3 mt-4 text-sm font-sans overflow-y-auto">
        <motion.div 
          className="flex justify-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="bg-gray-800 text-white p-3 rounded-lg rounded-bl-none max-w-[85%] shadow-md">
            <p className="leading-relaxed">Olá! Vamos começar seu treino de hoje?</p>
            <p className="mt-2 leading-relaxed">Qual o manejo inicial para um paciente com suspeita de Infarto Agudo do Miocárdio?</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <div className="bg-blue-600 text-white p-3 rounded-lg rounded-br-none max-w-[85%] shadow-md">
            <p className="leading-relaxed">Aspirina, Clopidogrel, Morfina, Oxigênio e Nitrato. O famoso MONA-BCH!</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          <div className="bg-gray-800 text-white p-3 rounded-lg rounded-bl-none max-w-[85%] shadow-md">
            <p className="leading-relaxed">Resposta correta! ✅ Quer uma explicação detalhada sobre a ação de cada um?</p>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
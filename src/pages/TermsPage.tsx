import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-background-dark text-content-dark py-28 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
          Termos de Uso
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-muted-dark space-y-4">
          <p>Bem-vindo ao MedBot. Ao usar nossos serviços, você concorda com estes termos. Por favor, leia-os com atenção.</p>
          <h2 className="text-white">1. Uso do Serviço</h2>
          <p>O MedBot fornece um serviço de tutoria baseado em IA para auxiliar nos estudos para residência médica. O serviço é para uso pessoal e não comercial.</p>
          <h2 className="text-white">2. Contas</h2>
          <p>Ao criar uma conta, você deve nos fornecer informações precisas e completas. Você é responsável por proteger sua senha e por qualquer atividade em sua conta.</p>
          {/* Adicione o restante do seu conteúdo aqui */}
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
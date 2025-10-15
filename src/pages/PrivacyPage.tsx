import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-background-dark text-content-dark py-28 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
          Política de Privacidade
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-muted-dark space-y-4">
          <p>Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você usa o MedBot.</p>
          <h2 className="text-white">1. Informações que Coletamos</h2>
          <p>Coletamos informações que você nos fornece diretamente, como seu nome, e-mail e especialidade de interesse ao se cadastrar.</p>
          <h2 className="text-white">2. Como Usamos Suas Informações</h2>
          <p>Usamos as informações para operar, manter e fornecer a você os recursos e a funcionalidade do serviço, além de nos comunicarmos diretamente com você.</p>
          {/* Adicione o restante do seu conteúdo aqui */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
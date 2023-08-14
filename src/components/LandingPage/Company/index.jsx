import React from "react";

const Company = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-start bg-gray-800 p-4 text-white">
        <div className="flex flex-col justify-between text-left p-4">
          <h1 className="font-bold text-2xl mb-4">Missão</h1>
          <p>
            Nosso bootcamp foi projetado para ser imersivo, desafiador e
            altamente recompensador. Você aprenderá os mais recentes padrões e
            práticas da indústria, dando-lhe uma vantagem competitiva no mercado
            de trabalho atual.
          </p>
        </div>

        <div className="flex flex-col justify-between text-left p-4">
          <h1 className="font-bold text-2xl mb-4">Oportunidade</h1>
          <p>
            Você terá a oportunidade de se conectar com outros indivíduos com os
            mesmos interesses que compartilham sua paixão pela tecnologia. Nossa
            rede de ex-alunos é vasta e altamente solidária, proporcionando uma
            comunidade que o ajudará ao longo de sua carreira.
          </p>
        </div>

        <div className="flex flex-col justify-between text-left p-4">
          <h1 className="font-bold text-2xl mb-4">Suporte</h1>

          <p>
            Nossos instrutores estão disponíveis para fornecer suporte
            individual sempre que você precisar, garantindo que você tenha a
            melhor experiência de aprendizado possível. Nos orgulhamos do nosso
            compromisso em ajudar nossos alunos a alcançar seus objetivos de
            carreira.
          </p>
        </div>

        <div className="flex flex-col justify-between text-left p-4">
          <h1 className="font-bold text-2xl mb-4"> Desafio</h1>
          <p>
            Se você está procurando uma experiência de aprendizado desafiadora e
            gratificante que o preparará para uma carreira bem-sucedida na
            indústria de tecnologia, então nosso bootcamp é a escolha perfeita
            para você. Não hesite em se inscrever hoje e comece sua jornada para
            um futuro brilhante na tecnologia!
          </p>
        </div>
      </div>
    </>
  );
};

export default Company;

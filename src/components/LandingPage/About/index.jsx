import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full mx-auto  text-white bg-gray-400">
        <div className="flex flex-col justify-center items-center h-screen lg:h-96 p-4  bg-[url('https://wallpaperaccess.com/full/1268171.jpg')]">
          <h1 className="font-bold text-xl  md:text-3xl text-white text-center md:w-1/2">
            Construa um futuro promissor na área de tecnologia!
          </h1>
          <p className="text-md  md:text-2xl  mt-10 text-justify md:w-1/2">
            Invista em você e se torne um profissional excepcional de Backend e
            DevOps com nossos cursos. Com nossa orientação especializada e
            prática, você estará preparado para enfrentar qualquer desafio em
            seu trabalho e elevar sua carreira a novos patamares.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

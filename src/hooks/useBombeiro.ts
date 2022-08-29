import LoterialFederalRepository from "../repository/LoterialFederalRepository";
import { IDesenvolvedorModel } from "../shared/models/DesenvolvedorModel";

export const useBombeiro = () => {
  const desenvolvedores: IDesenvolvedorModel[] = [
    {
      nome: "Lucas Vilas",
      email: "lucas.vilas@dtidigital.com.br",
      rangeInicial: 0,
      rangeFinal: 1.5,
    },
    {
      nome: "Nathan Araujo",
      email: "nathan.araujo@dtidigital.com.br",
      rangeInicial: 1.5,
      rangeFinal: 4,
    },
    {
      nome: "Rafael Angelo",
      email: "rafael.angelo@dtidigital.com.br",
      rangeInicial: 4,
      rangeFinal: 6.5,
    },
    {
      nome: "Wender Beraldo",
      email: "wender.beraldo@dtidigital.com.br",
      rangeInicial: 6.5,
      rangeFinal: 9,
    },
  ];

  const obterNumeroLoteriaFederal =
    LoterialFederalRepository.obterNumeroLoteriaFederal();

  const obterDesenvolvedorDaSemana = async () => {
    const numeroLoterial = await obterNumeroLoteriaFederal;
    return {
      ultimoNumero: numeroLoterial[numeroLoterial.length - 1],
      penultimoEhPar: numeroLoterial[numeroLoterial.length - 2] % 2 === 0,
    };
  };

  const obterDesenvolvedorPorNumero = (
    ultimoNumero: number,
    penultimoEhPar: boolean
  ) => {
    if (ultimoNumero === 2 || ultimoNumero === 7 || ultimoNumero === 9) {
      if (penultimoEhPar) {
        ultimoNumero = ultimoNumero != 9 ? ultimoNumero + 0.5 : 0;
      } else ultimoNumero = ultimoNumero - 0.5;
    }

    console.log(
      ultimoNumero,
      penultimoEhPar,
      desenvolvedores.find(
        (desenvolvedore) =>
          ultimoNumero >= desenvolvedore.rangeInicial &&
          ultimoNumero <= desenvolvedore.rangeFinal
      )
    );

    return desenvolvedores.find(
      (desenvolvedore) =>
        ultimoNumero >= desenvolvedore.rangeInicial &&
        ultimoNumero <= desenvolvedore.rangeFinal
    );
  };

  function getRandomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return {
    obterNumeroLoteriaFederal,
    obterDesenvolvedorDaSemana,
    obterDesenvolvedorPorNumero,
  };
};

export default useBombeiro;

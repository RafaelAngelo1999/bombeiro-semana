import axiosInstance from "../shared/utils/AxiosInstace";

const LOTERIA_FEDERAL = "/portaldeloterias/api/federal";

class LoterialFederalRepository {
  obterNumeroLoteriaFederal = async () => {
    return await axiosInstance
      .get(LOTERIA_FEDERAL)
      .then(
        (resposta) => resposta && resposta.data.dezenasSorteadasOrdemSorteio[0]
      )
      .catch((erro) => erro);
  };
}

export default new LoterialFederalRepository();

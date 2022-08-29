import axios from "axios";

const axiosInstance = axios.create({
  baseURL: String("https://servicebus2.caixa.gov.br"),
});

export default axiosInstance;

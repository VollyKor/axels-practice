import axios from "axios";

export const getProducts = async () =>
  await axios.get("https://demo7166187.mockable.io/products");

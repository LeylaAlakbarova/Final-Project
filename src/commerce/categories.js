import { instance } from ".";

const API_KEY = import.meta.env.VITE_CHEC_PUBLIC_KEY;

const fetchMenuCategories = async () => {
  try {
    const { data } = await instance.get(`categories`, {
      headers: { "X-Authorization": API_KEY },
    });
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchMenuCategories };

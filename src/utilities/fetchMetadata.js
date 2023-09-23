import axios from "axios";

export const getAllMetaData = async (URLs) => {
  try {
    const response = await Promise.all(URLs.map((e) => axios.get(e)));
    const data = response?.map((item) => item?.data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

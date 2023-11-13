import axios from "axios";

export const getAll = async () => {
  try {
    const res = await axios.get("/api/tenants");
    return res;
  } catch (error) {
    console.log(error);
  }
};

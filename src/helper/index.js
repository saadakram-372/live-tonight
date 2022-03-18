import axios from "axios";

const APP_ID = "acdb6da27e696632f85c3733dd43db52";
const BASE_URL = "https://rest.bandsintown.com";

export const bandsInTown = async (payload) => {
  const response = await axios.get(
    `${BASE_URL}/artists/${payload.input}/events`,
    {
      params: {
        app_id: APP_ID,
        date: "all",
      },
    }
  );
  return await response;
};

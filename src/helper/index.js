const APP_ID = "acdb6da27e696632f85c3733dd43db52";
const BASE_URL = "https://rest.bandsintown.com";

export const bandsInTown = async (payload) => {
  const pay = "maroon5";
  const response = await fetch(
    `${BASE_URL}/artists/${pay}/events?app_id=${APP_ID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(await response);
};

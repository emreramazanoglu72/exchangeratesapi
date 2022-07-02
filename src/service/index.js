const BASE_API_URL = "https://api.exchangerate.host/latest?base=";

export const TYPES = [
  {
    title: "USD",
    description: "Amerikan Doları",
  },
  {
    title: "EUR",
    description: "Avrupa Para Birimi",
  },
  {
    title: "JPY",
    description: "Japon Yeni",
  },
  {
    title: "GBP",
    description: "İngiliz Sterlini",
  },
  {
    title: "DKK",
    description: "Danimarka Kronu",
  },
  {
    title: "NOK",
    description: "Norveç Kronu",
  },
];

export const Api = (type) => {
  return fetch(`${BASE_API_URL}${type.title}`)
    .then((response) => response.json())
    .then((response) => response);
};

const generateJson = () => {
  const jsonData = [];
  TYPES.map(async (item) => {
    Api(item).then((res) =>
      jsonData.push({ type: item, value: res.rates["TRY"] })
    );
  });
  return jsonData;
};

export default generateJson;

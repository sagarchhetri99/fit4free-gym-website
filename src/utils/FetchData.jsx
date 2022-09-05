export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "27efbfe8c6msh9b9520c209ec0f1p183e06jsna7a306e658d8",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

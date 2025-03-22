const url = "http://www.omdbapi.com/?";
const key = "apikey=41b3c925";

const options = {
  method: "GET",
};
const movie = "3 idiots";

fetch(url + "t=" + movie + "&" + key, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error("error in fetching data");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

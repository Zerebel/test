const url = "http://localhost:8000/test";
const data = {
  msg: "testing",
};
const headers = {
  "Content-Type": "application/json",
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Response:", data);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

fetch("http://localhost:3000/todos", {
  method: "GET",
  headers: headersList,
})
  .then((respon) => respon.json())
  .then((data) => console.log(data));

function htmls([first, ...strings], ...values) {
  values.reduce((acc, curr) => acc.concat(acc, curr), [first]);
}

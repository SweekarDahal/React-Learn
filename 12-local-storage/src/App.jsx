import React from "react";

const App = () => {
  const user = {
    Name: "Sweekar Dahal",
    Age: 20,
    City: "Biratnagar",
  };
  localStorage.setItem("user", JSON.stringify(user));
  const usera = localStorage.getItem("user");
  console.log("this prints the in string" + usera + typeof usera);
  console.log("this printss it as object");
  console.log(JSON.parse(usera));
  localStorage.clear();
  return <div>App</div>;
};

export default App;

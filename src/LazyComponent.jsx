import axios from "axios";
import React from "react";

/*
1. Axios is a third party library , whereas fetch is inbuilt into JS 
2. The data in the response object for Axios , will be present in the 'data' property
*/
function LazyComponent() {
  const fetchR = fetch("https://jsonplaceholder.typicode.com/users");
  const axiosR = axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("Fetch Returns : ", fetchR);
  console.log("Axios Returns : ", axiosR);

  fetchR
    .then((response) => {
      const rawData = response;
      console.log("Data from Fetch : ", rawData);
      // We have to convert this rawData to json
      const jsonData = rawData.json();
      console.log("Converted Data : ", jsonData);
      jsonData
        .then((data) => {
          console.log("Converted Data by Fetch : ", data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    })
    .catch((error) => {
      console.log("Error : ", error);
    });

  axiosR
    .then((response) => {
      console.log("Data from Axios : ", response.data);
    })
    .catch((error) => {
      console.log("Error", error);
    });

  return <div>LazyComponent</div>;
}

export default LazyComponent;

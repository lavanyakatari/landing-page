// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export const FetchData = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => setData(response.data));
//   }, []);
//   console.log("data", data);

//   return (
//     <div className="font-medium text-lg">
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };
import { useState, useEffect } from "react";
import axios from "axios";

export const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="font-medium text-lg">
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>...Loading</p>}
    </div>
  );
};

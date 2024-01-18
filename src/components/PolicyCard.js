import React, { useEffect, useState } from "react";

const PolicyCard = () => {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/policies");
      const dataJson = await data.json();
      setPolicies(dataJson);
    };
    fetchData();
  }, []);
  console.log(policies[0].health);
  return (
    <div>
      {policies[0].health.map((elem, index) => {
        return <div key={index}>{elem}</div>;
      })}
    </div>
  );
};

export default PolicyCard;

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "react-bootstrap";

const PolicyCard = () => {
  const [policies, setPolicies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3001/policies");
      const dataJson = await data.json();
      setPolicies(dataJson);
    };
    fetchData();
  }, [policies]);
  // console.log(policies[0].health)
  return (
    <div>
      { policies[0]?.health?.map((elem,index)=>{
        return (
<Card
  color="light"
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {/* Card title */}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {/* Card subtitle */}
    </CardSubtitle>
    <CardText>
      {elem}
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
        )
      } )}
    </div>
  );
};

export default PolicyCard;




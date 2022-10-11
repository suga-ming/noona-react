import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  console.log("cities는?", cities);
  return (
    <div className="button-area">
      <Button className="button" variant="warning">
        Current Location
      </Button>

      {cities.map((item) => (
        <Button
          className="button"
          variant="warning"
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;

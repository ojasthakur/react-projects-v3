import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [array, setArray] = useState(data);
  const handleClick = (id) => {
    setArray(
      array.filter((element) => {
        return element.id !== id;
      })
    );
  };
  const getThemBack = () => {
    setArray(data);
  };
  return (
    <div>
      {array.map((element) => {
        return (
          <div style={{ "margin-bottom": "30px" }} key={element.id}>
            <h4>{element.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => handleClick(element.id)}
            >
              Remove {element.id}
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={getThemBack}>
        Get Them All Back
      </button>
    </div>
  );
};

export default UseStateArray;

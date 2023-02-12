import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Ojas",
    age: 27,
    hobby: "Coding",
  });
  const changePerson = () => {
    let newState;
    if (person.name === "Ojas") {
      setPerson((currentState) => {
        newState = { name: "Raina", age: "24", hobby: "Cooking" };
        return newState;
      });
    } else {
      setPerson((currentState) => {
        newState = { name: "Ojas", age: "27", hobby: "Coding" };
        return newState;
      });
      console.log(newState);
    }
  };
  return (
    <div>
      <h1>Name = {person.name}</h1>
      <h3>Age = {person.age}</h3>
      <h3>Hobby = {person.hobby}</h3>
      <br />
      <br />
      <button type="button" className="btn" onClick={changePerson}>
        Other Person
      </button>
    </div>
  );
};

export default UseStateObject;

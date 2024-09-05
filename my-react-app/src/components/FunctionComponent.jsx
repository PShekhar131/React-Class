import React, { useState } from "react";

const FunctionalComponent = (props) => {
  const [name, setName] = useState("Functional");

  const UpdateMe = () =>{
    setName('This is new Updated Text of onclick function.')
  };

  return (
    <>
      <div>
        {name} {props.comp}This is Functional component.
      </div>
      <button onClick={UpdateMe}>Update Me</button>
    </>
  );
};

export default FunctionalComponent;

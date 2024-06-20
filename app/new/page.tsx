import React, { useContext } from "react";
import myContext from "../practice/context";

const New = () => {
  const contextValue = useContext(myContext);
  console.log(contextValue);
  return <div>{contextValue.name}</div>;
};

export default New;

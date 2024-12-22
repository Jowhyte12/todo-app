import React from "react";

const CurrentDay=()=>{
  const currentday=new Date().toLocaleDateString();
  return<div>completed on:{currentday}</div>;
};
export default CurrentDay;
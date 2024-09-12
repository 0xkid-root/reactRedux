import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,incrementByvalue } from "../features/ShowSlice";

const SubChild1 = () => {
    const dispatch = useDispatch();
  const data = useSelector((c) => {
    console.log(c);
    return c.show.value;
  });
  return (
    <>
      <div>SubChild1:{data}</div>
      <button onClick={()=>dispatch(increment())}>Click Me</button>
      <button onClick={()=>dispatch(incrementByvalue(10))}>Increase By Value</button>
    </>
  );
};

export default SubChild1;

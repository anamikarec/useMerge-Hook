import React, { useEffect, useState } from "react";
import UseMerge from "./UseMerge";
const initState = {
  username: "",
  email: "",
  password: ""
};
const CustomHook = () => {
  const [data, setData] = useState(initState);
  const [wholedata, setWholeData] = useState([]);
  // useEffect(() => {
  //   setData(...data, payload);
  // }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setWholeData([...wholedata, data]);
    console.log(wholedata);
  };
  return (
    <>
      <div>Custom Hook</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setData({ ...data, username: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <br />
        <input type="submit" />
      </form>

      {/* <UseMerge wholedata={wholedata} /> */}
      {wholedata.map(function (item) {
        return (
          <>
            <div>{`${item.username} ${item.password} ${item.email}`}</div>
          </>
        );
      })}
    </>
  );
};

export default CustomHook;

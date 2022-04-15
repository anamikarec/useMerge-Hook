import React, { useEffect, useState } from "react";
const initState = {
  username: "",
  email: "",
  password: ""
};
const CustomHook = () => {
  const [data, setData] = useState(initState);

  // useEffect(() => {
  //   setData(...data, payload);
  // }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
    </>
  );
};

export default CustomHook;

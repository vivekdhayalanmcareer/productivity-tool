"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const Main = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { value } = useSelector((store) => store.counter);

  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div className="layout-container">
      <div className="left-sidebar"></div>
      <div className="content">{value} - test</div>
      <div className="right-sidebar">3</div>
    </div>
  );
};
export default Main;

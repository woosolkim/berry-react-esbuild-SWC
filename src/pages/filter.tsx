import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const END_POINT = "http://localhost:4000";

async function getHello2() {
  const respopnse = await fetch(`${END_POINT}/hello`);
  return respopnse;
}

export default function Filter() {
  const [filter, setFilter] = React.useState<string[]>([]);
  const [count, setCount] = React.useState(0);
  const [searchParams] = useSearchParams();

  const { data } = useQuery("hello2", getHello2);
  const filterParam = searchParams.get("filter");

  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
    setFilter((prev) => [...prev, `new${count}`]);
  };

  useEffect(() => {
    history.replaceState("", "", `/filter?filter=${filter}`);
  }, [filter]);

  useEffect(() => {
    if (filterParam) {
      setFilter(filterParam.split(","));
    }
  }, [filterParam]);

  console.log(filter);

  return (
    <>
      <button
        onClick={() => {
          handleButtonClick();
        }}
      >
        add filter
      </button>
      <p>filter page</p>
      {filter.map((f, i) => (
        <p key={i}>{f}</p>
      ))}
    </>
  );
}

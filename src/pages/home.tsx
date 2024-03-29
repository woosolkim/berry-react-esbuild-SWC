import React from "react";
import {
  Await,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import { counterState } from "../stats";

export default function Home() {
  const navigate = useNavigate();
  const [counter, setCounter] = useRecoilState(counterState);

  const user = useLoaderData();

  return (
    <section>
      <p>{user?.message}</p>
      <p>{user?.date}</p>
      <button onClick={() => navigate("/user")}>move to user</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </section>
  );
}

import React, { Suspense } from "react";
import { useQuery } from "react-query";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { cmState, cmToInchState, counterState } from "../stats";
import { useNavigate } from "react-router-dom";

const END_POINT = "http://localhost:4000";

type HelloResponse = {
  message: string;
  date: string;
};

const fetchUser = async (): Promise<HelloResponse> => {
  const response = await fetch(`${END_POINT}/hello`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function UserComponent() {
  const { data } = useQuery<HelloResponse, Error>("user", fetchUser, {
    suspense: true,
  });

  return (
    <div>
      <h1>{data?.message}</h1>
      <p>{data?.date}</p>
    </div>
  );
}

export default function User() {
  const navigate = useNavigate();
  const [counter, setCounter] = useRecoilState(counterState);
  const [cm, setCm] = useRecoilState(cmState);
  const inch = useRecoilValue(cmToInchState);
  const setInch = useSetRecoilState(cmToInchState);
  const resetInch = useResetRecoilState(cmToInchState);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontSize: "1.5rem",
      }}
    >
      <button onClick={() => navigate("/")}>move to home</button>

      <UserComponent />
      <h1>Counter: {counter}</h1>

      <h1>cm: {cm}</h1>
      <h1>inch: {inch}</h1>
      <button onClick={() => setCm(cm + 1)}>cm +</button>
      <button onClick={() => setCm(cm - 1)}>cm -</button>

      <button onClick={() => setInch(inch + 1)}>inch + 1</button>
      <button onClick={resetInch}>resetInch</button>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </section>
  );
}

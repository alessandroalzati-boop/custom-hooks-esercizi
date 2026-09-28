import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (!data || error) return <p>{error}</p>;
  if (loading) return <p>Caricamento...</p>;

  return (
    <ul className="my-4 ">
      {data.map((el) => (
        <li className="border-b my-3" key={el.id}>
          {el.name}
        </li>
      ))}
    </ul>
  );
}

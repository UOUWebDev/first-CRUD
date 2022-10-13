import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import MenuBar from "../components/menuBar";
import axios from "axios";

interface dataType {
  _id: any;
  title: string;
  body: string;
}

export default function Main() {
  const [dataArray, setDataArray] = useState<dataType[]>([
    { _id: "", title: "", body: "" },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/post")
      .then((res) => {
        setDataArray(res.data);
      })
      .catch((error) => console.log(error));
    console.log(dataArray);
  }, []);

  return (
    <>
      <MenuBar />
      {dataArray.map((data) => (
        <Post data={data} key={data._id} />
      ))}
      <CreatePost />
    </>
  );
}

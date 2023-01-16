import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Article() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3636/articles/" + id).then(({ data }) => {
      setTitle(data.title);
      setDescription(data.description);
      setText(data.text);
    });
  });

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <p>{description}</p>
      <p>{text}</p>
    </div>
  );
}

export default Article;

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3636/articles/" + id).then(({ data }) => {
      setTitle(data.title);
      setDescription(data.description);
      setText(data.text);
    });
  });

  function del(){
    axios.delete("http://localhost:3636/articles/" + id)
    navigate("/blog");
  }

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <p>{description}</p>
      <p>{text}</p>
      <button onClick={del}>Delete</button>
      <button onClick={()=> navigate("/blog")}>Cancel</button>
    </div>
  );
}

export default Article;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function save(e) {
    axios.post("http://localhost:3000/articles/", { title, description, text });
    navigate("/blog");
  }

  return (
    <div>
      <h1>New Article</h1>
      <form>
        <label>
          Title:
          <input onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Article:
          <textarea
            id="article-text"
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <div>
          <button
            id="create"
            onClick={(e) => {
              save();
            }}
          >
            Create
          </button>
          <button className="cancel" onClick={() => navigate("/blog")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
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

  function save() {
    console.log(id)
    axios
      .post("http://localhost:3636/articles/" + id, { title, description, text })
    // navigate("/blog");
  }

  return (  <div>
<h3>Update article with id: {id}</h3>
<form>
        <label>
          Title:
          <input defaultValue={title} onChange={(e) => setTitle({... title, value: e.target.value})} />
        </label>
        <label>
          Description:
          <textarea defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Article:
          <textarea
            id="article-text"
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <div>
          <button
            id="create"
            onClick={save}
          >
            Update
          </button>
                <button class="cancel" onClick={() => navigate("/blog")}>Cancel</button>
        </div>

      </form>

  </div>);
}

export default Edit;
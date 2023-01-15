import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

function Blog() {
  // const [user, setUser] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3636/articles/").then(({ data }) => {
      setList(data.list);
      console.log(data.list);
    });
  }, []);

  return (
    <div>
      <div class="blog-header">
        <span class="logo">Blog</span>
        <button
          onClick={() => {
            navigate("/create");
          }}
        >
          Create new
        </button>
      </div>
      {list.map((e) => {
        return (
          <div>
            <div key={e._id}>
              <h2>{e.title}</h2>
              <p>{<Moment format="DD/MM/YYYY">{e.createdAt}</Moment>}</p>

              <p>{e.description}</p>
              <p>{e.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;

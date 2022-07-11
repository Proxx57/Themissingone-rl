import { useState, useEffect } from "react";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="todo__">
        <h2>Selectionné vos réalisation</h2>
      <section className="todo__list">
        {posts.slice(offset, offset + limit).map(({ id, title, completed }) => (
          <article className="todo__list_alignement" key={id}>
            <h3 className="todo__list_text">
              {id}. {title}
            </h3>
            <input className="todo__list_checkbox" type="checkbox" name={completed}></input>
          </article>
        ))}
      </section>
      <section className="pagination">
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </section>
    </section>
  );
}


export default Posts;

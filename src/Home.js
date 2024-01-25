import { useState } from "react";
import style from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  return (
    <div>{loading ? <div class={style.loader}>Loading...</div> : null}</div>
  );
}

export default Home;

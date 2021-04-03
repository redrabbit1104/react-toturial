import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

function App() {
  // const [description, setDescription] = useState("クリック前の表示");
  const [tab, setTab] = useState("list");

  // const changeDescription = () => {
  //   // 追加
  //   setDescription("クリック後の表示です。");
  // };

  return (
    <div>
      <header>
        <li onClick={() => setTab("list")}>リスト</li>
        <li onClick={() => setTab("form")}>フォーム</li>
      </header>
      <hr />
      {/* {description} */}
      {tab === "list" ? <List /> : <Form />}

      {/* <button onClick={changeDescription}>ボタン</button> */}
    </div>
  );
}

export default App;

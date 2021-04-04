import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/languages";

function App() {
  // const [description, setDescription] = useState("クリック前の表示");
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    // 追加
    setLangs([...langs, lang]);
    setTab("list");
  };
  // const changeDescription = () => {
  //   // 追加
  //   setDescription("クリック後の表示です。");
  // };

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />}
    </div>
  );
}

export default App;

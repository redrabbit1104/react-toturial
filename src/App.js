import React from "react";
import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "クリック前の表示", tab: "list" };
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({ tab: "list" })}>リスト</li>
            <li onClick={() => this.setState({ tab: "form" })}>フォーム</li>
          </ul>
        </header>
        <hr />
        {tab === "list" ? <List /> : <Form />}
        {/* <button onClick={() => this.changeDescription()}>ボタン</button> */}
      </div>
    );
  }
}

export default App;

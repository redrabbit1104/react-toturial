import React from "react";
import styled from "styled-components";
import { TabBodyContainer } from "./components/tab-body-container";

const ListItem = styled.div`
  padding: 8px 16px;
  &:nth-child(n + 2) {
    border-top: 1px solid #d9dbe;
  }
`;

export class List extends React.Component {
  render() {
    const { langs } = this.props;
    return (
      <TabBodyContainer title="取り扱い言語リスト">
        {langs.map((lang, index) => {
          return <ListItem key={index}>{lang}</ListItem>;
        })}
      </TabBodyContainer>
    );
  }
}

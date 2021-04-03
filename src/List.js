// export const List = (props) => {
//   const title = props.title;
const LANGUAGES = ["Javascript", "C++", "Ruby", "Java", "PHP", "Go"];

export const List = () => {
  return (
    <div>
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};

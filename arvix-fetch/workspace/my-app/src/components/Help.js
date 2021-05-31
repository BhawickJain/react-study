import Key from "./key";

const Help = () => {
  return (
    <div className="helper">
      <span>keyboard shortcuts: </span>
      <span className="Key">
        more <Key value="k" />, less <Key value="j" />, reset <Key value="r" />
        , darkmode <Key value="d" />
      </span>
    </div>
  );
};

export default Help;

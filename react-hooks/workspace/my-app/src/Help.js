import Key from "./key";

const Help = () => {
  return (
    <div className="helper">
      keyboard shortcuts: more <Key value="k" />, less <Key value="j" />, reset{" "}
      <Key value="r" />
      , darkmode <Key value="space" />
    </div>
  );
};

export default Help;

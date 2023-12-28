import "./TextView.scss";

import { useContext } from "react";

import { JSONContext } from "../../context/JSONContext";

function TextView({ handleChange }) {
  const context = useContext(JSONContext);
  return (
    <section>
      <label htmlFor="jsonTextInput" className="sr-only">
        Type or Paste JSON Text
      </label>
      <textarea
        autoFocus
        onChange={handleChange}
        value={context.json}
        id="jsonTextInput"
      ></textarea>
    </section>
  );
}

export default TextView;

import "./TreeNode.scss";

import { useContext, useEffect, useState } from "react";

import ObjectToggle from "../ObjectToggle/ObjectToggle";

import { JSONContext } from "../../context/JSONContext";

function TreeNode({ name, object, getObjectContent, handleActiveObj }) {
  const context = useContext(JSONContext);
  const expandAll = context.expandAll;
  const [expanded, setExpanded] = useState(false);
  const objPropsContent = getObjectContent(object, false);
  const list = Array.isArray(object);

  useEffect(() => {
    if (expandAll === null) {
      return;
    }
    setExpanded(expandAll);
  }, [expandAll]);

  function toggleBracketBtnHandler() {
    setExpanded(!expanded);
  }

  function bracketClickHandler() {
    handleActiveObj(object);
  }

  const propName = name ? `${name}:` : list ? "Array" : "Object";

  const objectContents = (
    <>
      <div className="prop-name-wrapper">
        <button
          className="prop-name prop-name-obj"
          type="button"
          onClick={bracketClickHandler}
        >
          {propName}
        </button>
        <ObjectToggle
          list={list}
          expanded={expanded}
          bracketClickHandler={bracketClickHandler}
          toggleBracketBtnHandler={toggleBracketBtnHandler}
        />
      </div>
      <ul className={expanded ? "show" : "hide"} key={name}>
        {objPropsContent}
      </ul>
      <button type="button" className="bracket bracket-close">
        {Array.isArray(list) ? "]" : "}"}
      </button>
    </>
  );

  return (
    <>{name ? <li key={propName}>{objectContents}</li> : objectContents}</>
  );
}

export default TreeNode;

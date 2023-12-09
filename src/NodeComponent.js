import { useContext, useEffect, useState } from "react";

import ToggleBracketComponent from "./ToggleBracketComponent";

import { JSONContext } from "./JSONContext";

function NodeComponent({ name, object, getObjectContent, handleActiveObj }) {
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
    }, [expandAll])

    function toggleBracketBtnHandler() {
        setExpanded(!expanded);
    }

    function bracketClickHandler() {
        handleActiveObj(object);
    }

    return (
        <>
            <ToggleBracketComponent list={list} expanded={expanded} bracketClickHandler={bracketClickHandler} toggleBracketBtnHandler={toggleBracketBtnHandler} />
            <ul className={ expanded ? 'show' : 'hide' } key={name}>{objPropsContent}</ul>
        </>
    );
}

export default NodeComponent;

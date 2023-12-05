import { useState } from "react";
import ToggleBracketComponent from "./ToggleBracketComponent";

function NodeComponent({name, object, getObjectContent, handleActiveObj}) {
    const [expanded, setExpanded] = useState(false);
    const objPropsContent = getObjectContent(object, false);
    const list = Array.isArray(object);

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

import { useContext } from "react";

import { JSONContext } from "./JSONContext";

function TextComponent({ handleChange }) {
    const context = useContext(JSONContext);
    return (
        <section>
            <textarea autoFocus onChange={ handleChange } value={context.json}>
            </textarea>
        </section>
    );
}

export default TextComponent;

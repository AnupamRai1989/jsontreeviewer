import { useContext } from "react";

import { JSONContext } from "./JSONContext";

function TextComponent({ handleChange, invalidJSON }) {
    const context = useContext(JSONContext);
    return (
        <section className={invalidJSON ? 'invalid-json' : ''}>
            <textarea autoFocus onChange={ handleChange } value={context.json}>
            </textarea>
            <p>Invalid JSON!!</p>
        </section>
    );
}

export default TextComponent;

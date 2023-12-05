import { useContext } from "react";

import { JSONContext } from "./JSONContext";

function TextComponent({ handleChange, invalidJSON }) {
    const jsonText = useContext(JSONContext);
    return (
        <section className={invalidJSON ? 'invalid-json' : ''}>
            <textarea autoFocus onChange={ handleChange } value={jsonText}>
            </textarea>
            <p>Invalid JSON!!</p>
        </section>
    );
}

export default TextComponent;

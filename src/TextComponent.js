function TextComponent({ handleChange, jsonTxt }) {
    return (
        <textarea autoFocus onChange={ handleChange } value={jsonTxt}>
        </textarea>
    );
}

export default TextComponent;

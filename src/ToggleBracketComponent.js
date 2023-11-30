function ToggleBracketComponent({ list, expanded, toggleBracketBtnHandler, bracketClickHandler }) {
    return (
        <div className="btn-wrapper">
            <button type="button" className="expand-collapse-btn" onClick={toggleBracketBtnHandler}>{ expanded ? '-' : '+' }</button>
            <button type="button" className="brackets-btn" onClick={bracketClickHandler}>
                { list ? "[ ]": "{ }" }
            </button>
        </div>
    );
}

export default ToggleBracketComponent;

import './ObjectToggle.scss';

function ObjectToggle({ list, expanded, toggleBracketBtnHandler, bracketClickHandler }) {
    const toggleBtnClassName = expanded ? 'expand-collapse-btn caret-down' : 'expand-collapse-btn caret-right';
    return (
        <div className="btn-wrapper">
            <button type="button" className={toggleBtnClassName} onClick={toggleBracketBtnHandler}></button>
            <button type="button" className="bracket" onClick={bracketClickHandler}>
                    { list ? "[": "{" }{expanded ? "" : "..."}
            </button>
        </div>
    );
}

export default ObjectToggle;

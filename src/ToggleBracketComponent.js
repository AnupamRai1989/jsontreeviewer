function ToggleBracketComponent({ list }) {
    return (
        <div className="btn-wrapper">
            <button type="button" className="expand-collapse-btn">+</button>
            <button type="button" className="brackets-btn">
                { list ? "[ ]": "{ }" }
            </button>
        </div>
    );
}

export default ToggleBracketComponent;

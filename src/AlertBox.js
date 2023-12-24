function AlertBox({show, message, type, closeBtnHandler}) {
    const className = show ? `alert-wrapper alert-visible alert-${type}` : 'alert-wrapper';
    return (
        <div className={className}>
            <span className="icon"></span>
            <span className="alert-msg">{message}</span>
            <button className="close-btn close-icon" onClick={closeBtnHandler}></button>
        </div>
    )
}

export default AlertBox;

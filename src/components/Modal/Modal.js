import "./Modal.scss";

import About from "../About/About";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";

import FooterAction from "../../models/FooterAction";

function Modal({ show, type, closeBtnHandler }) {
  const modalClassName = show ? "show" : "hide";
  let content;
  switch (type) {
    case FooterAction.About:
      content = <About />;
      break;
    case FooterAction.PrivacyPolicy:
      content = <PrivacyPolicy />;
      break;
    default:
      break;
  }
  return (
    <>
      <section className={modalClassName}>
        <div className="backdrop" onClick={closeBtnHandler}></div>
        <aside className="modal">
          <div className="modal-header">
            <span>{type}</span>
            <button
              className="close-btn close-icon"
              onClick={closeBtnHandler}
            ></button>
          </div>
          <div className="modal-body">{content}</div>
        </aside>
      </section>
    </>
  );
}

export default Modal;

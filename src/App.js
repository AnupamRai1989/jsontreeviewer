import { useEffect, useState } from 'react';

import MainView from './components/MainView/MainView';
import { JSONContext } from './context/JSONContext';
import Alert from './components/Alert/Alert';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';

import { JSONViewMode } from './models/JSONViewMode';
import { DEFAULT_JSON } from './models/Constants';
import FooterAction from "./models/FooterAction";

function App() {
  const [viewMode, setViewMode] = useState(JSONViewMode.Text);
  const [jsonTxt, setJsonTxt] = useState(JSON.stringify(DEFAULT_JSON, null, 2));
  const [expandAll, setExpandAll] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: 'error' });
  const [modalState, setModalState] = useState({ show: false, type: '' });

  useEffect(() => {
    expandAllHandler(null);
  }, [expandAll]);

  const navActionsByViewMode = {
    [JSONViewMode.Text]: [
      { name: 'Prettier', handler: prettierClickHandler, className: 'btn-primary' },
      { name: 'Clear', handler: clearClickHandler, className: 'btn-secondary' }
    ],
    [JSONViewMode.Beautified]: [
      { name: 'Expand All', handler: expandAllHandler.bind(null, true), className: 'btn-primary' },
      { name: 'Collapse All', handler: expandAllHandler.bind(null, false), className: 'btn-secondary' }
    ]
  };

  const title = 'JSON Tree Viewer';
  const invalidJSONMsg = "JSON is invalid.";

  function viewModeClickHandler(viewMode) {
    const parsed = getJSONObject(jsonTxt);
    if (!parsed) {
      return;
    }
    setViewMode(viewMode);
  }

  function expandAllHandler(flag) {
    setExpandAll(flag);
  }
 
  function handleTextChange(event) {
    const data = event.target.value;
    setJsonTxt(data);
  }

  function getJSONObject(jsonTxt) {
    try {
      return JSON.parse(jsonTxt);
    }
    catch(e) {
      invalidJSONHandler(e && e.message);
      return null;
    }
  }

  function closeAlert() {
    setAlert({
      ...alert,
      show: false,
      message: ''
    });
  }

  function invalidJSONHandler(reason) {
      setAlert({
        ...alert,
        show: true,
        message: `${invalidJSONMsg} ${reason}.`
      });
      setTimeout(() => {
        closeAlert();
      }, 5000);
  }

  function prettierClickHandler() {
    const object = getJSONObject(jsonTxt);
    if (!object) {
      return;
    }
    const prettyJSONText = JSON.stringify(object, null, 2);
    setJsonTxt(prettyJSONText);
  }

  function clearClickHandler() {
    setJsonTxt('');
  }

  function closeModal() {
    setModalState({
      ...modalState,
      show: false,
      type: ''
    });
  }

  function footerActionHandler(action) {
    let type;
    switch (action) {
      case FooterAction.About:
        type = FooterAction.About;
        break;
      case FooterAction.PrivacyPolicy:
        type = FooterAction.PrivacyPolicy;
        break;
        default:
          break;
    }
    setModalState({
      ...modalState,
      show: true,
      type
    })
  }

  return (
    <>
      <Header title={title} />
      <NavBar
        viewMode={viewMode}
        handleMenuClick={viewModeClickHandler}
        navActionsByViewMode={navActionsByViewMode}
      />
      <JSONContext.Provider value={{ json: jsonTxt, expandAll: expandAll }}>
        <MainView viewMode={viewMode} handleChange={handleTextChange} />
      </JSONContext.Provider>
      <Footer footerActionHandler={footerActionHandler} />
      <Alert show={alert.show} message={alert.message} type="error" closeBtnHandler={closeAlert} />
      <Modal show={modalState.show} type={modalState.type} closeBtnHandler={closeModal} />
    </>
  );
}

export default App;

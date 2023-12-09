import { useEffect, useState } from 'react';

import Header from './Header';
import { JSONViewMode } from './models/JSONViewMode';
import JSONBodyComponent from './JSONBodyComponent';
import NavBar from './NavBar';
import { JSONContext } from './JSONContext';

function App() {
  const [viewMode, setViewMode] = useState(JSONViewMode.Text);
  const [jsonTxt, setJsonTxt] = useState('');
  const [expandAll, setExpandAll] = useState(null);
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

  let invalidJSON = false;

  const title = 'JSON Tree Viewer';

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
      return null;
    }
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

  return (
    <>
      <Header title={title} />
      <NavBar
        viewMode={viewMode}
        handleMenuClick={viewModeClickHandler}
        navActionsByViewMode={navActionsByViewMode}
      />
      <JSONContext.Provider value={{ json: jsonTxt, expandAll: expandAll }}>
        <JSONBodyComponent viewMode={viewMode} invalidJSON={invalidJSON} handleChange={handleTextChange} />
      </JSONContext.Provider>
    </>
  );
}

export default App;

import { useState } from 'react';

import Header from './Header';
import { JSONViewMode } from './models/JSONViewMode';
import JSONBodyComponent from './JSONBodyComponent';
import NavBar from './NavBar';
import { JSONContext } from './JSONContext';

function App() {
  const [viewMode, setViewMode] = useState(JSONViewMode.Text);
  const [jsonTxt, setJsonTxt] = useState('');
  let invalidJSON = false;

  const title = 'JSON Tree Viewer';

  function viewModeClickHandler(viewMode) {
    const parsed = getJSONObject(jsonTxt);
    if (!parsed) {
      return;
    }
    setViewMode(viewMode);
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
    console.log(prettyJSONText);
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
        clearClickHandler={clearClickHandler}
        prettierClickHandler={prettierClickHandler}
      />
      <JSONContext.Provider value={jsonTxt}>
        <JSONBodyComponent viewMode={viewMode} invalidJSON={invalidJSON} handleChange={handleTextChange} />
      </JSONContext.Provider>
    </>
  );
}

export default App;

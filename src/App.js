import { useState } from 'react';

import Header from './Header';
import { JSONViewMode } from './models/JSONViewMode';
import JSONBodyComponent from './JSONBodyComponent';
import NavBar from './NavBar';
import { JSONContext } from './JSONContext';

function App() {
  const [viewMode, setViewMode] = useState(JSONViewMode.Text);
  const [jsonTxt, setJsonTxt] = useState('');
  const [jsonObj, setJsonObj] = useState(null);

  const title = 'JSON Beautifier';
  const menus = [
    { id: 0, text: JSONViewMode.Text },
    { id: 1, text: JSONViewMode.Beautified }
  ];

  function viewModeClickHandler(viewMode) {
    try {
      if (!jsonTxt || !jsonTxt.trim()) {
          console.log("Empty value");
      }
      const parsed = JSON.parse(jsonTxt);
      setViewMode(viewMode);
      setJsonObj(parsed)
    } catch (e) {
        console.log(e);
        alert("Invalid JSON");
    }
  }
 
  function handleTextChange(event) {
    const data = event.target.value;
    console.log(data);
    setJsonTxt(data);
  }

  return (
    <>
      <Header title={title} />
      <NavBar menus={menus} selected={viewMode} handleMenuClick={viewModeClickHandler} />
      <JSONContext.Provider value={jsonObj}>
        <JSONBodyComponent viewMode={viewMode} jsonTxt={jsonTxt} handleChange={handleTextChange} />
      </JSONContext.Provider>
    </>
  );
}

export default App;

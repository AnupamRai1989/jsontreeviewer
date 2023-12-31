import { useContext, useState } from "react";

import { JSONContext } from "../../context/JSONContext";

import TreeNode from "../TreeNode/TreeNode";
import RightPanel from "../RightPanel/RightPanel";

function BeautifiedView() {
    const context = useContext(JSONContext);
    const json = JSON.parse(context.json);

    const [activeObj, setActiveObj] = useState(json);

    function handleActiveObj(activeObj) {
        setActiveObj(activeObj);
    }

    function getObjectContent(object, isPanel) {
        if (!object) {
            return;
        }
        const keys = Object.keys(object);
        const resultKeys = isPanel ?
            keys.sort((a, b) => {
                return a.localeCompare(b);
            })
            : keys;
        return resultKeys.map(key => {
            const value = object[key];
            const type = typeof value;
            let displayValue;
            let displayValueCssClass = `prop-value-${type}`;
            let isObject = false;
            switch(type) {
                case 'string':
                    displayValue = `"${value}"`;
                    break;
                case 'number':
                    displayValue = value;
                    break;
                case 'boolean':
                    displayValue = `${value}`;
                    break;
                case 'object':
                    if (!value) {
                        displayValue = `${value}`;
                    } else {
                        isObject = true;
                        displayValue = isPanel
                            ? (Array.isArray(value) ? 'Array': 'Object')
                            : <TreeNode name={key} object={value} getObjectContent={getObjectContent} handleActiveObj={handleActiveObj} />;
                    }
                    break;
                default:
                    displayValue = value;
                    break;
            }
            if (isPanel) {
                return <tr key={key}><td>{key}</td><td>{displayValue}</td></tr>
            }
            if (isObject) {
                return displayValue;
            }
            return <>
                <li key={key} className="prop-object">
                    <button className="prop-name" type="button" onClick={() => handleActiveObj(value)}>{key}: </button>
                    <span className={displayValueCssClass}>{displayValue}</span>
                </li>
            </>;
        });
    }

    return (
        <>
            <div className="beautified-wrapper">
                <TreeNode name={ null } object={json} getObjectContent={getObjectContent} handleActiveObj={handleActiveObj} />
            </div>
            <RightPanel object={activeObj} getObjectContent={getObjectContent} />
        </>
    );
}

export default BeautifiedView;

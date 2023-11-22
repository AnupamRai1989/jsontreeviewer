import { useContext } from "react";
import { JSONContext } from "./JSONContext";
import ToggleBracketComponent from "./ToggleBracketComponent";

function BeautifiedComponent() {
    const json = useContext(JSONContext);
    console.log(json);

    const content = function deepTraverse(object) {
        const isArray = Array.isArray(object);
        const keys = Object.keys(object);
        const links = keys.map(key => {
            const type = typeof object[key];
            let displayValue;
            let displayValueCssClass = `prop-value-${type}`;
            switch(type) {
                case 'string':
                    displayValue = `"${object[key]}"`;
                    break;
                    case 'number':
                        displayValue = object[key];
                        break;
                    case 'object':
                        if (!object[key]) {
                            displayValue = object[key];
                        } else {
                            displayValue = deepTraverse(object[key]);
                        }
                        break;
                    default:
                        displayValue = object[key];
                        break;
            }
            return <li key={key}><span className="prop-name">{key}: </span>
                <span className={displayValueCssClass}>{displayValue}</span></li>;
        });
        return (
        <>
            <ToggleBracketComponent list={isArray} />
            <ul>
                {links}
            </ul>
        </>);
    }(json);
    return (
        <div className="beautified-wrapper">
            { content }
        </div>
    );
}

export default BeautifiedComponent;

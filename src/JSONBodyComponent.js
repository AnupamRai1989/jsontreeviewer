import TextComponent from './TextComponent';
import BeautifiedComponent from './BeautifiedComponent';
import { JSONViewMode } from './models/JSONViewMode';

function JSONBodyComponent({ viewMode, jsonTxt, handleChange }) {
    const isText = viewMode === JSONViewMode.Text;

    return (
        <main className="json-body-wrapper">
            { isText ? (<TextComponent jsonTxt={jsonTxt} handleChange={handleChange} />) : (<BeautifiedComponent />)  }
        </main>
    );
}

export default JSONBodyComponent;

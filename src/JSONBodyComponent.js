import TextComponent from './TextComponent';
import BeautifiedComponent from './BeautifiedComponent';
import { JSONViewMode } from './models/JSONViewMode';

function JSONBodyComponent({ viewMode, invalidJSON, handleChange }) {
    const isText = viewMode === JSONViewMode.Text;
    const classList = `json-body-wrapper json-${viewMode.toLowerCase()}`;

    return (
        <main className={classList}>
            { isText ? (<TextComponent invalidJSON={invalidJSON} handleChange={handleChange} />) : (<BeautifiedComponent />)  }
        </main>
    );
}

export default JSONBodyComponent;

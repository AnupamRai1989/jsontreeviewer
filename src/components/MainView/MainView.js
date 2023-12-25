import './MainView.scss';

import TextView from '../TextView/TextView';
import BeautifiedView from '../BeautifiedView/BeautifiedView';
import { JSONViewMode } from '../../models/JSONViewMode';

function MainView({ viewMode, handleChange }) {
    const isText = viewMode === JSONViewMode.Text;

    return (
        <main>
            { isText ? (<TextView handleChange={handleChange} />) : (<BeautifiedView />)  }
        </main>
    );
}

export default MainView;

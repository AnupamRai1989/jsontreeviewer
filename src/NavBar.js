import { JSONViewMode } from './models/JSONViewMode';

function NavBar({ viewMode, handleMenuClick, prettierClickHandler, clearClickHandler }) {
    const menus = [
        { id: 0, text: JSONViewMode.Text },
        { id: 1, text: JSONViewMode.Beautified }
    ];
    const menuItems = menus.map(menu => {
        return <li key={menu.id}>
                <button 
                    type="button"
                    className={ viewMode === menu.text ? 'active' : '' }
                    onClick={ () => handleMenuClick(menu.text) }
                >
                    {menu.text}
                </button>
        </li>;
    });
    const secondaryNav = viewMode === JSONViewMode.Text ?
        <div className="secondary-nav">
            <button className="prettier-btn" type="button" onClick={prettierClickHandler}>Prettier</button>
            <button className="clear-btn" type="button" onClick={clearClickHandler}>Clear</button>
        </div>
        : null;
    return (
        <>
            <nav>
                <ul>
                    { menuItems }
                </ul>
            </nav>
            {secondaryNav}
        </>
    );
}

export default NavBar;

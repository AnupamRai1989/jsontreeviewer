
function NavBar({ menus, selected, handleMenuClick }) {
    const menuItems = menus.map(menu => {
        return <li key={menu.id}>
                <button 
                    type="button"
                    className={ selected === menu.text ? 'active' : '' }
                    onClick={ () => handleMenuClick(menu.text) }
                >
                    {menu.text}
                </button>
        </li>;
    });
    return (
        <nav>
            <ul>
                { menuItems }
            </ul>
        </nav>
    );
}

export default NavBar;

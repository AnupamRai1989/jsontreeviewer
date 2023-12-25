import "./NavBar.scss";

import { JSONViewMode } from "../../models/JSONViewMode";

function NavBar({ viewMode, handleMenuClick, navActionsByViewMode }) {
  const menus = [
    { id: 0, text: JSONViewMode.Text },
    { id: 1, text: JSONViewMode.Beautified },
  ];
  const menuItems = menus.map((menu) => {
    return (
      <li key={menu.id}>
        <button
          type="button"
          className={viewMode === menu.text ? "active" : ""}
          onClick={() => handleMenuClick(menu.text)}
        >
          {menu.text}
        </button>
      </li>
    );
  });
  const actionButtons = navActionsByViewMode[viewMode];
  const actionButtonsContent = actionButtons.map((actionButton) => {
    return (
      <button
        key={actionButton.name}
        className={actionButton.className}
        type="button"
        onClick={actionButton.handler}
      >
        {actionButton.name}
      </button>
    );
  });
  return (
    <>
      <nav>
        <ul>{menuItems}</ul>
      </nav>
      <div className="secondary-nav">{actionButtonsContent}</div>
    </>
  );
}

export default NavBar;

import "./Header.scss";

function Header({ title }) {
  return (
    <header>
      <a href="/" className="logo" aria-label="Home">
        <div className="tree"></div>
      </a>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;

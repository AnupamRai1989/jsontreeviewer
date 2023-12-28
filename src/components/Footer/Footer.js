import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span className="copyright">&copy; {year} jsontreeview.org</span>
    </footer>
  );
}

export default Footer;

import "./Footer.scss";

import FooterAction from "../../models/FooterAction";

function Footer({ footerActionHandler }) {
  const year = new Date().getFullYear();
  const { About, PrivacyPolicy } = FooterAction;
  return (
    <footer>
      <span className="copyright">&copy; {year} jsontreeview.org</span>
      <button type="button" onClick={() => footerActionHandler(About)}>
        {About}
      </button>
      <button type="button" onClick={() => footerActionHandler(PrivacyPolicy)}>
        {PrivacyPolicy}
      </button>
    </footer>
  );
}

export default Footer;

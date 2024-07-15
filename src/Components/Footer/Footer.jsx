import { Link } from "react-router-dom";
import "./Footerstyle.css";
export default function Footer() {
  return (
    <>
      <div className="master">
        <div className="logo">LOGO</div>

        <div className="center">
          <ul type="none" className="list">
            <li className="heading">Brands</li>
            <li>
              <Link class="custom-link" to="/">
                Zara
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/men">
                Pull&Bear
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/men">
                Massimo Dutti
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/">
                Bershka
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/men">
                Pull&Stradivarius
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/men">
                Massimo Oysho
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/men">
                Zara Home
              </Link>
            </li>
          </ul>
          <ul type="none" className="list">
            <li className="heading">Info</li>
            <li>
              <Link class="custom-link" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/men">
                Cookies
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/women">
                Legal
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/women">
                Accesability
              </Link>
            </li>
            <li>
              <Link class="custom-link" to="/women">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="last">
          <label>Join Our Newsletter </label>
          <input type="email" class="black-input" placeholder="EMAIL"></input>
        </div>
      </div>

      <div className="footnote">©LOGO 2023 | VAT n 1234567890</div>
    </>
  );
}

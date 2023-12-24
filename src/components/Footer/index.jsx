import { Link } from "react-router-dom";
import style from "./footer.module.css";
import instagramIcon from "../../assets/images/instagram.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import youtubeIcon from "../../assets/images/youtube.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import pinIcon from "../../assets/images/pin.svg";
import mailIcon from "../../assets/images/mail.svg";
import phoneIcon from "../../assets/images/phone.svg";

const Footer = () => {
  return (
    <footer>
      <div className={style.topFooter}>
        <div>
          <Link to={"/"} className={style.logo}>
            <img src="/icon.svg" />
          </Link>
          <div className={style.socialIcons}>
            <a href="https://www.instagram.com/leylalkbrva">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/Azii1920.ADNSU">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@algorithmicsglobal">
              <img src={youtubeIcon} alt="Youtube" />
            </a>
            <a href="https://twitter.com/tehsilgovaz/status/1518905730069323778">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
        <div>
          <h3>Menu</h3>
          <ul>
            <li>
              <Link to={"/products/new"}>Yeni</Link>
            </li>
            <li>
              <Link to={"/products/discounts"}>Endirimlər</Link>
            </li>
            <li>
              <Link to={"/products/accessories"}>Aksessuarlar</Link>
            </li>
            <li>
              <Link to={"/products/"}>Bütün brendlər</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Kömək</h3>
          <ul>
            <li>
              <p>Tez-tez soruşulan suallar</p>
            </li>
            <li>
              <p>Çatdırılma xidməti</p>
            </li>
            <li>
              <p>Geri qaytarılma şərtləri</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Əlaqə</h3>
          <ul className={style.contact}>
            <li>
              <img src={pinIcon} alt="Address" />
              <a href="https://maps.app.goo.gl/GfsH3tpf3XCwn1km6" className={style.address}>
              Baku, Azadliq Avenue, 20
              </a>
            </li>
            <li>
              <img src={mailIcon} alt="E-Mail" />
              <a href="mailto:llelekberova@gmail.com" className={style.email}>
                llelekberova@gmail.com
              </a>
            </li>
            <li>
              <img src={phoneIcon} alt="E-Mail" />
              <a href="tel:*9947" className={style.phone}>
                *9947
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.bottomFooter}>
        <p> &copy; Leyla Alakbarova 2023. Bütün hüquqlar qorunur.</p>
        <div className={style.rightPart}>
          <p>Qaydalar və şərtlər</p>
          <p>Məxfilik siyasəti</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

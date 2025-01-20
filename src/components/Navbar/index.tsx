import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import CouponIcon from "../../assets/icons/coupon.svg";
import ChartIcon from "../../assets/icons/chart.svg";
import EmailIcon from "../../assets/icons/email.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import "./styles.css";

const pages = [
  {
    id: "home",
    icon: HomeIcon,
  },
  {
    id: "coupon",
    icon: CouponIcon,
  },
  {
    id: "dashboard",
    icon: ChartIcon,
  },
  {
    id: "messages",
    icon: EmailIcon,
  },
  {
    id: "notifications",
    icon: NotificationIcon,
  },
  {
    id: "settings",
    icon: SettingsIcon,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo DIO Store" />
      {pages.map(({ id, icon }, index) => (
        <img
          key={id}
          src={icon}
          className={`navbar__icon ${
            index === 0 ? "navbar__icon--active" : ""
          }`}
        />
      ))}
    </nav>
  );
};

export default Navbar;

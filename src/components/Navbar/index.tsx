import Logo from "../../assets/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import CouponIcon from "../../assets/icons/coupon.svg";
import ChartIcon from "../../assets/icons/chart.svg";
import EmailIcon from "../../assets/icons/email.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import SettingsIcon from "../../assets/icons/settings.svg";
import { NavLink } from "react-router";
import "./styles.css";

const pages = [
  {
    id: "home",
    icon: HomeIcon,
    path: "/",
  },
  {
    id: "coupon",
    icon: CouponIcon,
    path: "admin/store/coupons",
  },
  {
    id: "dashboard",
    icon: ChartIcon,
    path: "dashboard",
  },
  {
    id: "messages",
    icon: EmailIcon,
    path: "admin/store/messages",
  },
  {
    id: "notifications",
    icon: NotificationIcon,
    path: "notifications",
  },
  {
    id: "settings",
    icon: SettingsIcon,
    path: "settings",
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo DIO Store" />
      {pages.map(({ id, icon, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `navbar__icon ${isActive ? "navbar__icon--active" : ""}`
          }
        >
          {({ isActive }) => (
            <img src={icon} className={isActive ? "navbar__icon--white" : ""} />
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;


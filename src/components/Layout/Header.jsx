import { Fragment } from "react";
import SweetsImage from "../../assets/sweets.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.heading}>Sweet Bliss</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={SweetsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;

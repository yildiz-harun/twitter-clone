import classes from "./NavBar.module.css";
import { BsStars } from "react-icons/bs";
import { IconContext } from "react-icons";

function NavBar() {
  return (
    <div className={classes.container}>
      <div>Home</div>
      <IconContext.Provider
        value={{ color: "black", className: "global-class-name" }}
      >
        <div>
          <BsStars />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default NavBar;

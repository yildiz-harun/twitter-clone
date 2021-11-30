import classes from "./MiddleSection.module.css";
import NavBar from "./NavBar/NavBar";
import TweetSection from "./TweetSection/TweetSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";

function MiddleSection() {
  return (
    <div className={classes.container}>
      <NavBar />
      <TweetSection />
      <WelcomeSection />
    </div>
  );
}

export default MiddleSection;

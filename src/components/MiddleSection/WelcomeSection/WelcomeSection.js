import classes from "./WelcomeSection.module.css";

function WelcomeSection() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div>
          <h1>Welcome to Twitter!</h1>
          <p>
            This is the best place to see what’s happening in your world. Find
            some people and topics to follow now.
          </p>
        </div>
      </div>
      <button className={classes.goButton}>Let's go!</button>
    </div>
  );
}

export default WelcomeSection;

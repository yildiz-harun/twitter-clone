import classes from "./TweetSection.module.css";
import { MdPermMedia } from "react-icons/md";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { IconContext } from "react-icons";
function TweetSection() {
  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <div className={classes.profilePic}></div>
        <input placeholder={"What's happening?"}></input>
      </div>
      <div className={classes.bottomSectionContainer}>
        <div className={classes.bottomSection}>
          <IconContext.Provider
            value={{
              color: "#1D9BF0",
              size: "18px",
              className: "global-class-name",
            }}
          >
            <div>
              <MdPermMedia />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1D9BF0",
              size: "18px",
              className: "global-class-name",
            }}
          >
            <div>
              <AiOutlineFileGif />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1D9BF0",
              size: "18px",
              className: "global-class-name",
            }}
          >
            <div>
              <BiPoll />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1D9BF0",
              size: "18px",
              className: "global-class-name",
            }}
          >
            <div>
              <BsEmojiSmile />
            </div>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1D9BF0",
              size: "18px",
              className: "global-class-name",
            }}
          >
            <div>
              <AiFillSchedule />
            </div>
          </IconContext.Provider>
        </div>
        <button>Tweet</button>
      </div>
    </div>
  );
}

export default TweetSection;

import React from "react";
import { AmplifyGreetings, AmplifySignIn } from "@aws-amplify/ui-react";

const LandingPage = () => {
  return (
    <>
      <div>
        <div>
          <img
            src={require("../assets/harborJRSlogo.jpg")}
            style={styles.pic}
          />
        </div>
        <div>
          <h3>Our Mission</h3>
          <p style={styles.paras}>
            To create collision among the entrepreneur community. By nature,
            entrepreneurs are problem solvers. We believe by connecting the
            thinkers, the doers and visionaries we will support the economic
            vitality of the region.
          </p>
          <p style={styles.paras}>
            An entrepreneur's journey is a unique one. Founded and operated by
            entrepreneurs who live the journey, The Harbor leverages this
            experience to support entrepreneurs at any stage.
          </p>
        </div>
        <div>
          <h3>About JRS Coding School</h3>
          <p style={styles.paras}>
            As technology continues to advance at a rapid pace, it has fostered
            an insatiable demand for leading-edge technology business products
            and the professionals who develop them. The JRS Coding School was
            established in 2016 to help bridge the gap between the demand for
            development expertise and the talent available in the marketplace.
          </p>
          <p style={styles.paras}>
            Upon graduating from this 12-week immersive “boot-camp”program,
            successful students will be proficient at a junior professional
            level, able to build full-stack web applications using JavaScript.
            Students are also introduced to agile workflow, communication, and
            software lifecycle training to prepare them for working in a dynamic
            professional software development setting.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

const styles = {
  paras: {
    textAlign: "justify",
    margin: "30px",
  },
  pic: {
    width: "220px",
    height: "100px",
    horizontalAlign: "center",
  },
};

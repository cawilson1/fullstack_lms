import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";
import defaultAvatar from "../assets/avatar-png-transparent-4.png";

const EditUserProfile = ({
  boundUpdateUserProfile,
  profile,
  isToggle,
  setIsToggle,
}) => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const useAuth = await Auth.currentUserInfo();
      const gotUser = await useAuth.username;
      setUsername(gotUser);
    };
    getUsername();
  }, []);

  let firstnameInput, lastnameInput, emailInput, bioInput, githubInput;

  return (
    <div>
      <form
        style={styles.formStyle}
        onSubmit={async (e) => {
          e.preventDefault();
          await boundUpdateUserProfile({
            username: username,
            firstname: firstnameInput.value,
            lastname: lastnameInput.value,
            email: emailInput.value,
            bio: bioInput.value,
            github: githubInput.value,
            avatar: avatar,
          });
          await setIsToggle(!isToggle);
        }}
      >
        <label htmlFor="firstname">First Name:</label>
        <input
          id="firstname"
          type="text"
          defaultValue={profile.firstname}
          ref={(node) => (firstnameInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          id="lastname"
          type="text"
          defaultValue={profile.lastname}
          ref={(node) => (lastnameInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="text"
          defaultValue={profile.email}
          ref={(node) => (emailInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="github">Github URL:</label>
        <input
          id="github"
          type="text"
          defaultValue={profile.github}
          ref={(node) => (githubInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="bio">Tell Us About Yourself:</label>
        <textarea
          id="bio"
          type="text"
          defaultValue={profile.bio}
          ref={(node) => (bioInput = node)}
          style={styles.textarea}
        ></textarea>
        {/* render image, give file ßtype input to update, give default image if none selected */}
        <input
          type="file"
          accept="image/*"
          id="s3-avatar"
          style={styles.inputs}
          onChange={(e) => {
            setAvatar(e.target.files[0].name);
          }}
        />
        {profile.avatar === "" ? (
          <div>
            <img src={defaultAvatar} style={styles.avatar} />
          </div>
        ) : (
          <div>
            <img src={profile.avatar} style={styles.avatar} />
          </div>
        )}
        <div style={styles.buttonWrapper}>
          <div style={styles.buttons}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit Updates
            </Button>
          </div>
          <div style={styles.buttons}>
            <Button
              size="small"
              variant="contained"
              onClick={() => setIsToggle(!isToggle)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "auto",
    background: "white",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  inputs: {
    width: 250,
    marginBottom: 10,
    marginTop: 4,
    borderRadius: 8,
    border: "1px solid black",
    boxShadow: "inset 0px 0px 1.5px 1.5px gray",
    padding: 10,
    fontFamily: "sans-serif",
  },
  textarea: {
    width: 250,
    margin: 20,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 4,
    border: "1px solid black",
    boxShadow: "inset 0px 0px 1.5px 1.5px gray",
    padding: 10,
    fontFamily: "sans-serif",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    margin: "10px",
  },
};

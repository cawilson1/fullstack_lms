import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "@reach/router";

const UserProfileInput = ({
  boundUserCreateProfile,
  setIsProfile,
  isProfile,
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
          boundUserCreateProfile &&
            (await boundUserCreateProfile({
              username: username,
              firstname: firstnameInput.value,
              lastname: lastnameInput.value,
              email: emailInput.value,
              bio: bioInput.value,
              github: githubInput.value,
              avatar: avatar,
            }));
          await setIsProfile(true);
          await navigate("/");
        }}
      >
        <h3>{username}, finish creating your profile below:</h3>
        <label htmlFor="firstname">First Name:</label>

        <input
          id="firstname"
          type="text"
          placeholder="Your First Name"
          ref={(node) => (firstnameInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          id="lastname"
          type="text"
          placeholder="Your Last Name"
          ref={(node) => (lastnameInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="email">Your Email Address:</label>
        <input
          id="email"
          type="text"
          placeholder="Your full email address"
          ref={(node) => (emailInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="github">GitHub Profile Address:</label>
        <input
          id="github"
          type="text"
          placeholder="Paste in your full GitHub URL"
          ref={(node) => (githubInput = node)}
          style={styles.inputs}
        />

        <label htmlFor="bio">What's Your Story?</label>
        <textarea
          id="bio"
          type="text"
          placeholder="Tell us about yourself..."
          ref={(node) => (bioInput = node)}
          style={styles.textarea}
        ></textarea>

        <label htmlFor="avatar">Upload a Photo As Your Avatar:</label>
        <input
          type="file"
          accept="image/*"
          id="s3-avatar"
          onChange={(e) => {
            setAvatar(e.target.files[0].name);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfileInput;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
};

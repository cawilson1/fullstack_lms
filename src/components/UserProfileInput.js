import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const UserProfileInput = ({ boundUserCreateProfile }) => {
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

  console.log("username from profile input", username);

  let firstnameInput, lastnameInput, emailInput, bioInput, githubInput;

  return (
    <div>
      <form
        style={styles.formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          boundUserCreateProfile &&
            boundUserCreateProfile({
              username: username,
              firstname: firstnameInput.value,
              lastname: lastnameInput.value,
              email: emailInput.value,
              bio: bioInput.value,
              github: githubInput.value,
              avatar: avatar,
            });
        }}
      >
        <h3>{username}, finish creating your profile below:</h3>
        <input
          id="firstname"
          type="text"
          placeholder="Input first name"
          ref={(node) => (firstnameInput = node)}
        />
        <input
          id="lastname"
          type="text"
          placeholder="Input last name"
          ref={(node) => (lastnameInput = node)}
        />
        <input
          id="email"
          type="text"
          placeholder="Input email address"
          ref={(node) => (emailInput = node)}
        />
        <textarea
          id="bio"
          type="text"
          placeholder="Input bio"
          ref={(node) => (bioInput = node)}
        ></textarea>
        <input
          id="github"
          type="text"
          placeholder="Input github url"
          ref={(node) => (githubInput = node)}
        />
        <input
          type="file"
          accept="image/*"
          id="s3-avatar"
          onChange={(e) => {
            setAvatar(e.target.files[0]);
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
};

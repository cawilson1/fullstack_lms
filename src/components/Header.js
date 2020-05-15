import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Header = () => {
  return (
    <>
      <h2>Header - Title of Webpage</h2>
      <AmplifySignOut />
    </>
  );
};

export default Header;

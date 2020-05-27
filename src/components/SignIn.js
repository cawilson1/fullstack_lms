import React from "react";
import { Auth } from "aws-amplify";
import { AmplifySignIn } from "@aws-amplify/ui-react";

export const SignIn = () => {
  return (
    <div>
      <AmplifySignIn />;
    </div>
  );
};

export default SignIn;

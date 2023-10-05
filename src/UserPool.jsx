import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  region: "eu-central-1",
  UserPoolId: "eu-central-1_Ftpi7I5Tu",
  ClientId: "44rnn3ej9b04r35cmbum5jh3tu",
};

export default new CognitoUserPool(poolData);

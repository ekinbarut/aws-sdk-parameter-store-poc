// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

AWS.config.update({ region: process.env.TEST_AWS_DEFAULT_REGION });

const credentials = new AWS.Credentials(
  process.env.TEST_AWS_ACCESS_KEY_ID,
  process.env.TEST_AWS_SECRET_ACCESS_KEY
);

const ssm = new AWS.SSM({ region: process.env.TEST_AWS_DEFAULT_REGION });

const salesForceUsernameSecretPath = {
  Name: process.env.SALESFORCE_USERNAME_SECRET_PATH,
  WithDecryption: false,
};

const salesForcePasswordSecretPath = {
  Name: process.env.SALESFORCE_PASSWORD_SECRET_PATH,
  WithDecryption: false,
};

const mongoConnectionStringSecretPath = {
  Name: process.env.MONGO_CONNECTIONSTRING_SECRET_PATH,
  WithDecryption: false,
};

const sFuserName = await ssm.getParameter(salesForceUsernameSecretPath);
const sFPassword = await ssm.getParameter(salesForcePasswordSecretPath);
const mongoConnection = await ssm.getParameter(mongoConnectionStringSecretPath);

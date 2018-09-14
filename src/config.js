export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "varises-api-dev-attachmentsbucket-1d6wr0wpvtztl"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://wtgc5tnbta.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_4IAy8d0hN",
      APP_CLIENT_ID: "2vc23uteu9g74rcgc34pe4e3m3",
      IDENTITY_POOL_ID: "us-east-2:b51bef8e-a844-42ce-bc8b-32eb7ea8f0db"
    }
  };
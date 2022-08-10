import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb"
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/Google'
import { DynamoDBAdapter } from "@next-auth/dynamodb-adapter"

const config = {
  credentials: {
    accessKeyId: process.env.NEXT_AUTH_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_AUTH_AWS_SECRET_KEY,
  },
  region: 'us-east-1',
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
})

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: DynamoDBAdapter(
    client
  ),
});
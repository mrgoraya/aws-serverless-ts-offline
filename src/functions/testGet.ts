import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler,
} from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const response = {
      statusCode: 200,
      body: "Hello serverless tutorial offline",
    };
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: "An error occurred",
    };
  }
};

import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    APIGatewayProxyHandler,
  } from "aws-lambda";
  
  export const handler: APIGatewayProxyHandler = async (
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    try {
        const requestBody = event.body;
        const parseBody = JSON.parse(requestBody || '');

      return {
        statusCode: 200,
        body: `Tested post with post body: ${parseBody?.name}`,
      };;
    } catch (error) {
      return {
        statusCode: 500,
        body: "An error occurred",
      };
    }
  };
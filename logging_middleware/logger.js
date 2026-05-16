const axios = require("axios");

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmVlbWF0aWkuZ3AyMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJleHAiOjE3Nzg5Mjk4MzYsImlhdCI6MTc3ODkyODkzNiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI5ZGUwOTg0LTNiN2UtNGM5ZC05NjgxLWZhYzlhMWRlN2FlNiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImcgcCBzcmVlbWF0aWkiLCJzdWIiOiI3NDc3MTc5ZC1hN2U5LTRhM2UtODkyNy1hMzY1OWQ5M2FlYjQifSwiZW1haWwiOiJzcmVlbWF0aWkuZ3AyMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoiZyBwIHNyZWVtYXRpaSIsInJvbGxObyI6IjIybWlzMDEzNSIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6Ijc0NzcxNzlkLWE3ZTktNGEzZS04OTI3LWEzNjU5ZDkzYWViNCIsImNsaWVudFNlY3JldCI6IkdFZVZ0Q2FldkZmQXNSaGIifQ.NsFhRDS71CeEUljv9gOVxvqlVtLnC-D6tnsoMErzqTE";

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {

    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      "Log Created Successfully:",
      response.data
    );

  } catch (error) {

    console.error(
      "Logging Failed:",
      error.response?.data || error.message
    );

  }
}

module.exports = Log;
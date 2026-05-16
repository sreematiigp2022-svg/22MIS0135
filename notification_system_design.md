# Stage 1

## GET Notifications

GET /notifications

Response:
{
  "notifications": []
}

## POST Notification

POST /notifications

Request:
{
  "title": "Placement Alert",
  "message": "TCS hiring"
}

Response:
{
  "success": true
}
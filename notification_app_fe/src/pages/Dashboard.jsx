import {
  useEffect,
  useState
} from "react";

import {
  fetchNotifications
} from "../services/api";

import {
  Log
} from "../services/logger";

function Dashboard() {

  const [notifications,
    setNotifications] = useState([]);

  useEffect(() => {

    const loadData = async () => {

      try {

        const data =
          await fetchNotifications();

        setNotifications(data);

        Log(
          "frontend",
          "info",
          "page",
          "Dashboard loaded"
        );

      } catch (error) {

        Log(
          "frontend",
          "error",
          "api",
          "Failed to fetch notifications"
        );

      }

    };

    loadData();

  }, []);

  return (

    <div>

      <h1>
        Notifications
      </h1>

      {
        notifications.map((item) => (

          <div key={item.ID}>

            <h3>
              {item.Type}
            </h3>

            <p>
              {item.Message}
            </p>

          </div>

        ))
      }

    </div>

  );

}

export default Dashboard;
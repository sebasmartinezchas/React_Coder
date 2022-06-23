import React from "react";
import { createContext, useState } from "react";

const Notification = ({ message, severity }) => {
  const notificationStyle = {
    position: "absolute",
    top: 800,
    right: 15,
    width: "auto",
    height: "auto",
    backgroundColor: severity === "error" ? "red" : "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
  };

  return <div style={notificationStyle}>{message}</div>;
};
const NotificationContext = createContext();
export const NotificationProvider = ({ children }) => {
  const [msgNotification, setMsgNotification] = useState({
    severity: "success",
    message: "",
  });
  const setNotification = (sev, msg) => {
    setMsgNotification({ severity: sev, message: msg });
    setTimeout(() => {
      setMsgNotification({ ...msgNotification, message: "" });
    }, 3000);
  };
  return (
    <NotificationContext.Provider value={setNotification}>
      {msgNotification.message !== "" && (
        <Notification
          message={msgNotification.message}
          severity={msgNotification.severity}
        />
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;

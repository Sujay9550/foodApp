import classes from "./Notification.module.css";

const Notification = (props) => {
  let notificationClasses = "";

  if (props.status === "pending") {
    notificationClasses = classes.pending;
  }
  if (props.status === "error") {
    notificationClasses = classes.error;
  }
  if (props.status === "success") {
    notificationClasses = classes.success;
  }
  return (
    <li className="mt-2">
      <span className={notificationClasses}>{props.title}</span>
      <span className={notificationClasses}>{props.message}</span>
    </li>
  );
};

export default Notification;

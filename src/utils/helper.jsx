import {
  UrgentPriorityColour,
  LowPriority,
  MediumPriority,
  HighPriority,
  NoPriority,
  ToDo,
  Cancelled,
  Done,
  InProgress,
  Backlog,
} from "../utils/icons";

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case "No priority":
      return <NoPriority />;
    case "Low":
      return <LowPriority />;
    case "Medium":
      return <MediumPriority />;
    case "High":
      return <HighPriority />;
    case "Urgent":
      return <UrgentPriorityColour />;
    default:
      return <UrgentPriorityColour />;
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return <Backlog />;
    case "Todo":
      return <ToDo />;
    case "In progress":
      return <InProgress />;
    case "Done":
      return <Done />;
    case "Canceled":
      return <Cancelled />;
    default:
      return <Cancelled />;
  }
};

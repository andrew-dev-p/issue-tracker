import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const issueStatusToDetailsMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  [Status.OPEN]: {
    label: "Open",
    color: "red",
  },
  [Status.IN_PROGRESS]: {
    label: "In Progress",
    color: "violet",
  },
  [Status.CLOSED]: {
    label: "Closed",
    color: "green",
  },
};

interface IssueStatusBadgeProps {
  status: Status;
}

const IssueStatusBadge: React.FC<IssueStatusBadgeProps> = ({ status }) => {
  return (
    <Badge color={issueStatusToDetailsMap[status].color}>
      {issueStatusToDetailsMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadge;

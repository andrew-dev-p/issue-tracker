"use client";

import { Card } from "@radix-ui/themes";
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from "recharts";

interface IssueChartProps {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart: React.FC<IssueChartProps> = ({
  open,
  inProgress,
  closed,
}) => {
  const data = [
    {
      label: "Open",
      value: open,
    },
    {
      label: "In Progress",
      value: inProgress,
    },
    {
      label: "Closed",
      value: closed,
    },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar
            barSize={60}
            style={{ fill: "var(--accent-9)" }}
            dataKey="value"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;

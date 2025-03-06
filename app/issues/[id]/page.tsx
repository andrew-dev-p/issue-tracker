import { auth } from "@/auth";
import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import { cache } from "react";

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({
    where: { id: issueId },
  })
);

const IssueDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session = await auth();

  const { id } = await params;

  const issue = await fetchUser(Number(id));

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const issue = await fetchUser(Number(id));

  return {
    title: issue?.title,
    description: `Details of issue ${issue?.id}`,
  };
}

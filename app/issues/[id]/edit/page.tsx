import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "@/app/issues/_components/IssueForm";

interface EditIssuePageProps {
  params: { id: string };
}

const EditIssuePage: React.FC<EditIssuePageProps> = async ({ params }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: Number(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;

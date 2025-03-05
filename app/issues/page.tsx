import { auth } from "@/auth";
import { prisma } from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssueActions from "./IssueActions";
import IssueTable from "./IssueTable";

interface IssuesPageProps {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue; page: string }>;
}

const IssuesPage: React.FC<IssuesPageProps> = async ({ searchParams }) => {
  const searchParamsResult = await searchParams;

  const orderBy = searchParamsResult.orderBy
    ? { [searchParamsResult.orderBy]: "asc" }
    : undefined;

  const page = Number(searchParamsResult.page) || 1;
  const pageSize = 10;

  const where = {
    status: searchParamsResult.status,
  };

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const session = await auth();

  const issueCount = await prisma.issue.count({ where });

  return (
    <div>
      {session && <IssueActions />}
      <IssueTable searchParams={searchParamsResult} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </div>
  );
};

export default IssuesPage;

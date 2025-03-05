import Pagination from "./components/Pagination";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      itemCount={100}
      pageSize={10}
      currentPage={Number(searchParams.page)}
    />
  );
}

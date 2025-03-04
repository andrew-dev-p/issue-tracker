import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface EditIssueButtonProps {
  issueId: number;
}

const EditIssueButton: React.FC<EditIssueButtonProps> = ({ issueId }) => {
  return (
    <Button>
      <Pencil2Icon /> <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;

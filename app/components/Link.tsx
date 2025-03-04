import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface LinkProps {
  href: string;
  children: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink passHref legacyBehavior href={href}>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;

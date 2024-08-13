import { Link } from "react-router-dom";

export default function BlueLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <span className="font-normal text-blue-500 hover:text-blue-600 hover:underline">
        {name}
      </span>
    </Link>
  );
}

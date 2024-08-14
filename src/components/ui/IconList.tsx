import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IconListItem {
  type: string; // Using type as the key
  icon: ReactNode;
  href: string;
  value: ReactNode;
}

interface IconListProps {
  items: IconListItem[];
}

export default function IconList({ items }: IconListProps) {
  return (
    <dl className="space-y-4 text-base leading-7 text-gray-800 hover:text-gray-950">
      {items.map((item) => (
        <Link to={item.href} className="flex items-center" key={item.type}>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <span className="sr-only">{item.type}</span>
              {item.icon}
            </dt>
            <dd>{item.value}</dd>
          </div>
        </Link>
      ))}
    </dl>
  );
}

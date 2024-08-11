import { Key, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IconListItem {
  type: string;
  icon: ReactElement;
  href: string;
  value: ReactNode;
}

interface IconListProps {
  items: IconListItem[];
}

export default function IconList({ items }: IconListProps) {
  return (
    <dl className="space-y-4 text-base leading-7 text-gray-600">
      {items.map((item: IconListItem, index: Key | null | undefined) => (
        <div key={index} className="flex gap-x-4">
          <dt className="flex-none">
            <Link to={item.href}>
              <span className="sr-only">{item.type}</span>
              {item.icon}
            </Link>
          </dt>
          <dd>
            <Link className="hover:text-gray-900" to={item.href}>
              {item.value}
            </Link>
          </dd>
        </div>
      ))}
    </dl>
  );
}

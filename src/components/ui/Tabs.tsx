import { NavLink } from "react-router-dom";

export function Tabs({
  navigation,
  className,
}: {
  navigation: { name: string; href: string }[];
  className: string;
}) {
  return (
    <nav className={className}>
      {navigation.map((tab: { name: string; href: string }) => (
        <NavLink
          key={tab.name}
          to={tab.href}
          className={({ isActive }: { isActive: boolean }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
              : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}

export function MobileTabs({
  navigation,
  className,
  onNavigate,
}: {
  navigation: { name: string; href: string }[];
  className: string;
  onNavigate: () => void;
}) {
  return (
    <nav className={className}>
      {navigation.map((tab) => {
        return (
          <NavLink
            key={tab.name}
            to={tab.href}
            onClick={onNavigate}
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            }
          >
            {tab.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

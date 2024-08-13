import { NavLink } from "react-router-dom";

export default function MobileTabs({
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

export default function DoubleList({
  items,
}: {
  items: [label: string, value: string][];
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="space-y-1">
        {items.map(([label, value]) => (
          <div key={label} className="text-left text-sm sm:text-lg">
            <div className="font-medium">{label}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

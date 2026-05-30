export default function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white animate-pulse">
      <div className="h-56 w-full bg-gray-200" />
      <div className="space-y-3 p-6">
        <div className="h-5 w-3/4 rounded-full bg-gray-200" />
        <div className="h-4 w-full rounded-full bg-gray-100" />
        <div className="h-4 w-5/6 rounded-full bg-gray-100" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="h-4 w-2/3 rounded-full bg-gray-100" />
          <div className="h-4 w-2/3 rounded-full bg-gray-100" />
          <div className="h-4 w-1/2 rounded-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

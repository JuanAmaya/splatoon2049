export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-12 max-w-lg mx-auto">
      <h2 className="text-4xl text-graySide mb-4 font-medium">Loading</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="animate-pulse rounded-md bg-black/40 w-56 h-20" />
          <div className="animate-pulse rounded-md bg-black/40 w-36 h-20" />
        </div>
        <div className="animate-pulse rounded-md bg-black/40 w-96 h-44" />
        <div className="animate-pulse rounded-md bg-black/40 w-96 h-16" />
      </div>
    </div>
  );
}

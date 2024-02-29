"use client";

export default function ErrorFetch() {
  return (
    <div className="mt-8 flex flex-col justify-center items-center gap-2 mx-2">
      <h2 className="text-graySide text-7xl font-medium">An error ocurred!</h2>
      <div className="bg-graySide p-2 rounded-md text-center">
        <p className="text-2xl">
          Failed to fetch data. Please try again later.
        </p>
      </div>
    </div>
  );
}

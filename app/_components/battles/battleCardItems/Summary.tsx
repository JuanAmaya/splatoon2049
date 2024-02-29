type SummaryProps = {
  title: string;
  className: string;
  children: string;
};

export default function Summary(summaryProps: SummaryProps) {
  return (
    <div className={`rounded-md text-center px-2 ${summaryProps.className}`}>
      <p className="text-lg">{summaryProps.title}</p>
      <p className="text-xl">{summaryProps.children}</p>
    </div>
  );
}

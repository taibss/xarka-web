export function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="label-mono flex items-center gap-3">
      <span className="text-copper">{index}</span>
      <span className="h-px w-8 bg-hairline" />
      <span>{label}</span>
    </div>
  );
}

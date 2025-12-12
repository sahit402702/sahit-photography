interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 className="font-handwritten">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg mt-2">{subtitle}</p>}
      <div className="underline" />
    </div>
  );
}

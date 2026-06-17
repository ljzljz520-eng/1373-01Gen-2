interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center' : 'text-left'
      }`}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 mb-4">
        {title}
      </h2>
      <div className={`${align === 'center' ? 'mx-auto' : ''} w-20 h-1 bg-gold-500 rounded-full mb-4`}></div>
      {subtitle && (
        <p className="text-lg text-ink-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

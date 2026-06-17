import { CheckCircle, Circle, Info } from 'lucide-react';
import type { MaterialSection } from '@/data/archiveData';

interface MaterialListProps {
  sections: MaterialSection[];
}

export default function MaterialList({ sections }: MaterialListProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="bg-white rounded-xl shadow-card overflow-hidden"
        >
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-4">
            <h3 className="font-serif text-xl font-bold text-white">
              {section.title}
            </h3>
          </div>
          <ul className="divide-y divide-cream-200">
            {section.items.map((item) => (
              <li
                key={item.id}
                className="px-6 py-5 flex items-start gap-4 hover:bg-cream-50 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {item.required ? (
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  ) : (
                    <Circle className="w-6 h-6 text-ink-300" />
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-lg leading-relaxed ${
                      item.required ? 'font-medium text-ink-800' : 'text-ink-600'
                    }`}
                  >
                    {item.name}
                    {item.required && (
                      <span className="ml-2 text-primary-600 text-sm font-medium">
                        *必填
                      </span>
                    )}
                  </p>
                  {item.note && (
                    <p className="mt-2 text-ink-500 text-base flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-600" />
                      <span>{item.note}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

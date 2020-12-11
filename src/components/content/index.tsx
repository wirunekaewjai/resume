import { Section } from './section';
import { Props } from './types';
import css from './index.c';

export function Content ({
  sections
}: Props
)
{
  return (
    <main className={css['container']} >
      {
        sections.map(section => (
          <Section
            key={section.title}
            icon={section.icon}
            title={section.title}
            items={section.items}
            tags={section.tags}
          />
        ))
      }
    </main>
  );
}
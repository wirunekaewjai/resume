import { Group } from './group';
import { Props } from './types';
import css from './index.c';

export function Contact ({
  groups,
}: Props)
{
  return (
    <div className={css['container']} >
      {
        groups.map((group, i) => (
          <Group
            key={i}
            icon={group.icon}
            items={group.items}
          />
        ))
      }
    </div>
  );
}
import clsx from 'clsx';

import { Item } from './item';
import { Props } from './types';
import css from './index.c';

export function Group ({
  icon,
  items,
}: Props)
{
  return (
    <div className={css['container']} >
      <i className={clsx('material-icons', css['icon'])}>{icon}</i>
      <div className={css['items']} >
        {
          items.map((item, i) => (
            <Item
              key={i}
              text={item.text}
              href={item.href}
            />
          ))
        }
      </div>
    </div>
  );
}
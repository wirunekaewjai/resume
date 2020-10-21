import clsx from 'clsx';

import { Item } from './item';
import { Tag } from './tag';
import { Props } from './types';
import css from './index.module.scss';

export function Section ({
  icon,
  title,
  items,
  tags,
}: Props)
{
  return (
    <section className={css['container']} >
      <i className={clsx('material-icons', css['icon'])}>{icon}</i>
      <div className={css['info']} >
        <h3 className={css['title']} >
          {title}
        </h3>
        {
          items?.map((item, i) => (
            <Item
              key={'item-' + i}
              title={item.title}
              subtitle={item.subtitle}
              items={item.items}
            />
          ))
        }
        {
          tags?.length > 0 ?
          <div className={css['tags']}>
            {
              tags?.map((tag, i) => (
                <Tag
                  key={'tag-' + i}
                  title={tag}
                />
              ))
            }
          </div>
          :
          null
        }
      </div>
    </section>
  );
}
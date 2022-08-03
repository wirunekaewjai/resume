import { Props } from './types';
import css from './index.module.scss';

export function Item ({
  title,
  subtitle,
  isList = false,
  items,
}: Props)
{
  return (
    <div className={css['container']} >
      <h4 className={css['title']} >
        {title}
      </h4>
      <h5 className={css['subtitle']} >
        {subtitle}
      </h5>
      {
        isList || items.length > 1 ?
        <ul className={css['list']} >
          {
            items.map((item, i) => (
              <li
                key={i}
                className={css['item']}
              >
                {item}
              </li>
            ))
          }
        </ul>
        :
        <p className={css['item']} >
          {items[0]}
        </p>
      }
    </div>
  );
}
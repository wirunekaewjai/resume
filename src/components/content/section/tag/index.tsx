import { Props } from './types';
import css from './index.module.scss';

export function Tag ({
  title,
}: Props)
{
  return (
    <span className={css['tag']} >
      {title}
    </span>
  );
}
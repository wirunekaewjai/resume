import { Props } from './types';
import css from './index.c';

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
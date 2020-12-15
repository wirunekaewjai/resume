import clsx from 'clsx';

import { Props } from './types';
import css from './index.module.scss';

export function Item ({
  text,
  href,
}: Props)
{
  if (href)
  {
    return (
      <a
        className={clsx(css['text'], css['anchor'])}
        rel="noopenner noreferrer"
        target="_blank"
        title={text}
        href={href}
      >
        {text}
      </a>
    );
  }

  return (
    <span className={css['text']} >
      {text}
    </span>
  );
}
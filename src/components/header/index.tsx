import { Contact } from './contact';
import { Props } from './types';
import css from './index.module.scss';

export function Header ({
  avatar,
  name,
  job,
  contacts,
}: Props)
{
  return (
    <header className={css['container']} >
      <div>
        <img
          className={css['avatar']}
          src={avatar}
        />
      </div>
      <div className={css['info']} >
        <div className={css['headline']} >
          <h1 className={css['title']} >
            {name}
          </h1>
          <h2 className={css['subtitle']} >
            {job}
          </h2>
        </div>
        <div className={css['contacts']} >
          {
            contacts.map((contact, i) => (
              <Contact
                key={i}
                groups={contact.groups}
              />
            ))
          }
        </div>
      </div>
    </header>
  );
}
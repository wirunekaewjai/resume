import * as Contact from './contact/types';

export type Props = {
  avatar: string;
  name: string;
  job: string;
  contacts: Contact.Props[];
};
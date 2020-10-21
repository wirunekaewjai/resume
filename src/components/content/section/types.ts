import * as Item from './item/types';

export type Props = {
  icon: string;
  title: string;
  items?: Item.Props[];
  tags?: string[];
};
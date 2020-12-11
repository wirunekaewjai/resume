import css from '@wirunekaewjai/css';

export default css`
module-container
{
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 5mm;
}

module-icon
{
  font-size: 1.4em;
}

module-info
{
  display: grid;
  row-gap: 3mm;
}

module-title
{
  font-size: 1.4em;
}

module-tags
{
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
}
`;
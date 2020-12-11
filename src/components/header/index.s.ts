import css from '@wirunekaewjai/css';

export default css`
module-container
{
  background-color: #ccccd2;
  padding: 9mm 1cm;

  display: grid;

  grid-template-columns: 1in auto;
  column-gap: 1cm;
}

module-avatar
{
  width: 1in;
  height: 1in;

  border-radius: 1cm;
}

module-info
{
  display: grid;
  row-gap: 5mm;

  align-items: flex-start;
}

module-headline
{
  display: grid;
}

module-contacts
{
  display: grid;
  grid-template-columns: 6cm auto;
}

module-title
{
  font-weight: 700;
  font-size: 2em;
}

module-subtitle
{
  font-weight: 400;
  font-size: 1em;
}

@media screen
{
  module-container
  {
    border-top-left-radius: 1mm;
    border-top-right-radius: 1mm;
  }
}
`;
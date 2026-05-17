<script lang="ts">
  import Contact from "./header-contact.svelte";

  interface ItemProps {
    text: string;
    href?: string;
  }

  interface GroupProps {
    icon: string;
    items: ItemProps[];
  }

  interface ContactProps {
    groups: GroupProps[];
  }

  interface Props {
    avatar: string;
    name: string;
    heading: string;
    stack: string[];
    contacts: ContactProps[];
  }

  const { avatar, name, heading, stack, contacts }: Props = $props();
</script>

<header class="container">
  <div>
    <img class="avatar" src={avatar} alt={name} />
  </div>
  <div class="info">
    <div class="headline">
      <h1 class="title">{name}</h1>
      <p class="heading">{heading}</p>
    </div>
    <div class="stack">
      <strong>Stack:</strong>
      <div class="stack-items">
        {#each stack as item, index (index)}
          <span>{item}</span>
        {/each}
      </div>
    </div>
    <div class="contacts">
      {#each contacts as contact, index (index)}
        <Contact groups={contact.groups} />
      {/each}
    </div>
  </div>
</header>

<style>
  .container {
    padding: 9mm 1cm 3mm;
    display: grid;
    grid-template-columns: 1in auto;
    column-gap: 1cm;
  }

  .avatar {
    width: 1in;
    height: 1in;
    border-radius: 1cm;
  }

  .info {
    display: grid;
    row-gap: 3mm;
    align-items: flex-start;
  }

  .headline {
    display: grid;
  }

  .contacts {
    display: grid;
    grid-template-columns: 6cm auto;
  }

  .title {
    font-weight: 700;
    font-size: 1.5em;
  }

  .heading {
    font-size: 0.9em;
    margin-top: 2mm;
  }

  .stack {
    font-size: 0.9em;
    display: flex;
    align-items: baseline;
  }

  .stack-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1mm;
  }

  .stack-items span {
    background-color: #f0f0f0;
    padding: 1mm 2mm;
    white-space: nowrap;
    border-radius: 2mm;
    margin-left: 1mm;
    margin-bottom: 1mm;
    font-size: 0.9em;
  }

  @media screen {
    .container {
      border-top-left-radius: 1mm;
      border-top-right-radius: 1mm;
    }
  }
</style>

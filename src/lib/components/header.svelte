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
    contacts: ContactProps[];
  }

  const { avatar, name, contacts }: Props = $props();
</script>

<header class="container">
  <div>
    <img class="avatar" src={avatar} alt={name} />
  </div>
  <div class="info">
    <div class="headline">
      <h1 class="title">{name}</h1>
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
    padding: 9mm 1cm 5mm;
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
    font-size: 1.75em;
  }

  @media screen {
    .container {
      border-top-left-radius: 1mm;
      border-top-right-radius: 1mm;
    }
  }
</style>

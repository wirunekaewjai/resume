<script lang="ts">
  import Item from './item/Item.svelte';

  interface ItemProps {
    text: string;
    href?: string;
  }

  interface Props {
    icon: string;
    items: ItemProps[];
  }

  let { icon, items }: Props = $props();
</script>

<div class="container">
  <i class="material-icons icon">{icon}</i>
  <div class="items">
    {#each items as item}
      <Item text={item.text} href={item.href} />
    {/each}
  </div>
</div>

<style lang="scss">
  .container
  {
    display: flex;
    align-items: flex-start;
  }

  .icon
  {
    color: #9aa1af;
    font-size: 11pt !important;
  }

  .items
  {
    display: grid;
    row-gap: 1.1mm;
  }
</style>

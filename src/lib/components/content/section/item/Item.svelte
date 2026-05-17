<script lang="ts">
  interface Props {
    title: string;
    subtitle: string;
    isList?: boolean;
    items: string[];
  }

  let { title, subtitle, isList = false, items }: Props = $props();
</script>

<div class="container">
  <h4 class="title">{title}</h4>
  <h5 class="subtitle">{subtitle}</h5>
  {#if isList || items.length > 1}
    <ul class="list">
      {#each items as item}
        <li class="item">{item}</li>
      {/each}
    </ul>
  {:else}
    <p class="item">{items[0]}</p>
  {/if}
</div>

<style lang="scss">
  .container
  {
    display: grid;
    row-gap: 1mm;
    font-size: 0.9em;
  }

  .title
  {
    font-weight: 500;
  }

  .subtitle
  {
    line-height: 1;
    font-weight: 400;
    color: #666;
  }

  .list
  {
    margin: 0 0 1mm;
  }

  .item
  {
    margin: 1mm 0;
  }
</style>

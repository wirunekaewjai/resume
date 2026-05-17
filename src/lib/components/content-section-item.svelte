<script lang="ts">
  interface Props {
    display: "normal" | "short";
    title: string;
    subtitle: string;
    itemType: "list" | "text";
    items: string[];
  }

  const { display, title, subtitle, itemType, items }: Props = $props();
</script>

<div class="container">
  {#if display === "short"}
    <div class="short">
      <h4 class="title">{title}</h4>
      <h5 class="subtitle">{subtitle}</h5>
    </div>
  {:else}
    <h4 class="title">{title}</h4>
    <h5 class="subtitle">{subtitle}</h5>
  {/if}
  {#if itemType === "list"}
    <ul class="list">
      {#each items as item, index (index)}
        <li class="item">{item}</li>
      {/each}
    </ul>
  {:else}
    <p class="item">{items.join(", ")}</p>
  {/if}
</div>

<style>
  .container {
    display: grid;
    row-gap: 1mm;
    font-size: 0.9em;
  }

  .title {
    font-weight: 500;
  }

  .subtitle {
    line-height: 1;
    font-weight: 400;
    color: #666;
  }

  .list {
    margin: 0 0 1mm;
  }

  .item {
    margin: 1mm 0;
  }

  .short {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1mm;
    align-items: center;
  }
</style>

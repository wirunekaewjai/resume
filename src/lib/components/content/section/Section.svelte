<script lang="ts">
  import Item from './item/Item.svelte';
  import Tag from './tag/Tag.svelte';

  interface SectionItem {
    title: string;
    subtitle: string;
    isList?: boolean;
    items: string[];
  }

  interface Props {
    icon: string;
    title: string;
    items?: SectionItem[];
    tags?: string[];
  }

  let { icon, title, items, tags }: Props = $props();
</script>

<section class="container">
  <i class="material-icons icon">{icon}</i>
  <div class="info">
    <h3 class="title">{title}</h3>
    {#each items ?? [] as item, i}
      <Item
        title={item.title}
        subtitle={item.subtitle}
        isList={item.isList}
        items={item.items}
      />
    {/each}
    {#if tags && tags.length > 0}
      <div class="tags">
        {#each tags as tag}
          <Tag title={tag} />
        {/each}
      </div>
    {/if}
  </div>
</section>

<style lang="scss">
  .container
  {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 5mm;
  }

  .icon
  {
    font-size: 1.4em;
  }

  .info
  {
    display: grid;
    row-gap: 3mm;
  }

  .title
  {
    font-size: 1.3em;
  }

  .tags
  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

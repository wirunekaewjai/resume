<script lang="ts">
  import Item from "./content-section-item.svelte";
  import Tag from "./content-section-tag.svelte";

  interface SectionItem {
    display: "normal" | "short";
    title: string;
    subtitle: string;
    itemType: "list" | "text";
    items: string[];
  }

  interface Props {
    icon: string;
    title: string;
    items?: SectionItem[];
    tags?: string[];
  }

  const { icon, title, items, tags }: Props = $props();
</script>

<section class="container">
  <i class="material-icons icon">{icon}</i>
  <div class="info">
    <h3 class="title">{title}</h3>
    {#each items ?? [] as item, index (index)}
      <Item
        display={item.display}
        title={item.title}
        subtitle={item.subtitle}
        itemType={item.itemType}
        items={item.items}
      />
    {/each}
    {#if tags && tags.length > 0}
      <div class="tags">
        {#each tags as tag (tag)}
          <Tag title={tag} />
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 5mm;
  }

  .icon {
    font-size: 1.4em;
  }

  .info {
    display: grid;
    row-gap: 2mm;
  }

  .title {
    font-size: 1.3em;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

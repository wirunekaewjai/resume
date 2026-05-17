<script lang="ts">
  import Group from "./header-contact-group.svelte";

  interface ItemProps {
    text: string;
    href?: string;
  }

  interface GroupProps {
    icon: string;
    items: ItemProps[];
  }

  interface Props {
    groups: GroupProps[];
  }

  const { groups }: Props = $props();
</script>

<div class="container">
  {#each groups as group, index (index)}
    <Group icon={group.icon} items={group.items} />
  {/each}
</div>

<style>
  .container {
    display: grid;
    row-gap: 1.2mm;
    font-size: 0.8em;
  }
</style>

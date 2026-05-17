<script lang="ts">
  import Group from './group/Group.svelte';

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

  let { groups }: Props = $props();
</script>

<div class="container">
  {#each groups as group}
    <Group icon={group.icon} items={group.items} />
  {/each}
</div>

<style lang="scss">
  .container
  {
    display: grid;
    row-gap: 1.2mm;
    font-size: 0.8em;
  }
</style>

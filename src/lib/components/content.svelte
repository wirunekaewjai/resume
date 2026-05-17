<script lang="ts">
  import Section from "./content-section.svelte";

  interface SectionItem {
    title: string;
    subtitle: string;
    isList?: boolean;
    items: string[];
  }

  interface SectionProps {
    icon: string;
    title: string;
    items?: SectionItem[];
    tags?: string[];
  }

  interface Props {
    sections: SectionProps[];
  }

  const { sections }: Props = $props();
</script>

<main class="container">
  {#each sections as section (section.title)}
    <Section icon={section.icon} title={section.title} items={section.items} tags={section.tags} />
  {/each}
</main>

<style>
  .container {
    padding: 6.5mm 2cm 0 1cm;
    display: grid;
    row-gap: 5mm;
  }
</style>

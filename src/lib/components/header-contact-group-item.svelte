<script lang="ts">
  interface Props {
    text: string;
    href?: string;
  }

  const { text, href }: Props = $props();
</script>

{#if href}
  <a class="text anchor" rel="noopener noreferrer" target="_blank" title={text} {href}>
    {text}
  </a>
{:else}
  <span class="text">{text}</span>
{/if}

<style>
  .text {
    margin-left: 3mm;
    color: var(--primary-color);
    text-decoration: none;
  }

  .anchor:hover {
    filter: brightness(1.2);
    text-decoration: underline;
  }
</style>

<script lang="ts">
  interface Props {
    title: string;
  }

  let { title }: Props = $props();
</script>

<span class="tag">{title}</span>

<style lang="scss">
  .tag
  {
    display: inline;
    background-color: #d9d9d9;
    border-radius: 1cm;
    padding: 1mm 2mm;
    margin-bottom: 2mm;
    margin-right: 2mm;
    font-size: 0.88em;
  }
</style>

<script lang="ts">
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

{@render children()}

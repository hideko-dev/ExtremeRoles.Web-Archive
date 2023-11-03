<script>
    import Top from "./components/top/top.svelte";
    import Advanced from "./components/advanced/advanced.svelte";
    import Font from "./lib/fonts.svelte";
</script>

<Font/>
<div class="app">
    <Top/>
    <Advanced/>
</div>

<style>
    .app {
        background: #0c0c0c;
    }
</style>
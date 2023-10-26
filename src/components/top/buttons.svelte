<script>
    import Features from "./features.svelte";
    import DocsBtn from "./docsbtn.svelte";
</script>

<div class="btns">
    <Features/>
    <div style="margin-left: 0.5rem">
        <DocsBtn/>
    </div>
</div>

<style>
    .btns {
        margin-top: 1.45rem;
        display: flex;
        align-items: center;
    }
</style>
<script>
    import Features from "./btns/features.svelte";
    import Docs from "./btns/docs.svelte";
    import Repo from "./btns/repo.svelte";
    import Sponser from "./btns/sponser.svelte";
</script>

<div class="btns">
    <Features/>
    <Docs/>
    <Repo/>
    <Sponser/>
</div>

<style>
    .btns {
        display: grid;
        grid-template-columns: repeat(2, 0fr);
        grid-gap: 10px;
        padding: 20px;
        width: 25rem;
        margin: 0 auto 0;
    }
</style>
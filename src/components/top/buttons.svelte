<script>
    import Features from "./btns/features.svelte";
    import Docs from "./btns/docs.svelte";
    import Repo from "./btns/repo.svelte";
    import Sponser from "./btns/sponser.svelte";
</script>

<div class="btn">
    <div class="b"><Features/></div>
    <div class="b"><Docs/></div>
    <div class="b"><Repo/></div>
    <div class="b"><Sponser/></div>
</div>

<style>
    .btn {
        padding: 20px;
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .b {
        margin-inline: 5px;
    }
    @media (max-width: 750px) {
        .btn {
            display: grid;
            grid-template-columns: repeat(2, 0fr);
            grid-gap: 10px;
        }
        .b {
            margin-inline: 0;
        }
    }
</style>
<script>
    import Features from "./btns/features.svelte";
    import Docs from "./btns/docs.svelte";
    import Repo from "./btns/repo.svelte";
    import Sponser from "./btns/sponser.svelte";
    const scale = 1.125;
    const margin = 30;
</script>

<div class="btn">
    <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Features/></div>
    <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Docs/></div>
    <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Repo/></div>
    <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Sponser/></div>
</div>

<style>
    .btn {
        padding: 20px;
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 750px) {
        .btn {
            display: grid;
            grid-template-columns: repeat(2, 0fr);
            grid-gap: 10px;
        }
        .b {
            margin-inline: 5;
        }
    }
</style>
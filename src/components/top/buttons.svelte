<script>
    import Features from "./btns/features.svelte";
    import Docs from "./btns/docs.svelte";
    import Repo from "./btns/repo.svelte";
    import Sponser from "./btns/sponser.svelte";
    let scale = 1;
    let margin = 5;
    function on(s) {
        switch (s){
            case 2:
                margin = 50
                break
            case 1.5:
                margin = 30
                break
            case 1.25:
                margin = 15
                break
            case 1:
                margin = 5
                break
        }
        scale = s;
    }
</script>

<div class="btn">
    <div class="contents">
        <div style="margin-bottom: 3rem;">
            <button on:click={() => on(2)}>2</button>
            <button on:click={() => on(1.5)}>1.5</button>
            <button on:click={() => on(1.25)}>1.25</button>
            <button on:click={() => on(1)}>1</button>
        </div>


        <div class="content">
            <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Features/></div>
            <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Docs/></div>
            <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Repo/></div>
            <div class="b" style="scale: {scale}; margin-inline: {margin}px"><Sponser/></div>
        </div>
    </div>
</div>

<style>
    .content {
        display: flex;
    }
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
            margin-inline: 0;
        }
    }
</style>
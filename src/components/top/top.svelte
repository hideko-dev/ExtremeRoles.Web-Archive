<script>
    import Title from "./title.svelte"
    import Btns from "./buttons.svelte";
    import Image from "./image.svelte";
    import Mouse from "./mouse.svelte";
</script>

<div class="top">
<!--    <img class="bg" src="top_bg.webp" alt="img">-->
        <div class="content">
            <Title/>
            <Btns/>
            <Image/>
            <Mouse/>
        </div>
</div>

<style>
    .top {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgb(23,22,23);
        z-index: 100;
    }
    .top::before {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, transparent, rgba(52, 52, 52, 1.5), transparent);
    }
    .content {
        z-index: 10;
        width: 100%;
    }
</style>
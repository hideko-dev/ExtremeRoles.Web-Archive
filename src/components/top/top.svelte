<script>
    import Title from "./title.svelte"
    import Test from "./features.svelte"
    import Mouse from "./mouse.svelte";
</script>

<div class="top">
    <img class="bg" src="top_bg.webp" alt="img">
    <div class="content">
        <Title/>
        <Test/>
        <Mouse/>
    </div>
</div>

<style>
    .top {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content {
        z-index: 10;
    }
    .bg {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        pointer-events: none;
        user-select: none;
    }
</style>
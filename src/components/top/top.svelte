<script>
    import Title from "./title.svelte"
    import ButtonRow from "./buttonRow.svelte";
    import Image from "./image.svelte";
    import Mouse from "./mouse.svelte";
</script>

<div class="top">
        <div class="content">
            <Title/>
            <ButtonRow/>
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
        background: url("public/bg.svg") no-repeat center/cover;
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
        width: 100%;
        z-index: 100;
    }
</style>
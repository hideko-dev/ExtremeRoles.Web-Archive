<script>
    import { onMount } from "svelte";
    let titleOpacity = 0;
    let bioOpacity = 0;
    onMount(() =>
        setTimeout(() => {
            titleOpacity = 1
            setTimeout(() => {
                bioOpacity = 1
            }, 300)
        }, 150)
    );
</script>

<div class="title">
    <div class="content">
        <p class="big" style="opacity: {titleOpacity}">ExtremeRoles</p>
        <p class="bio" style="opacity: {bioOpacity}">上級者向けのAmongUsのMod</p>
    </div>
</div>

<style>
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content {
        text-align: center;
    }
    .big {
        font-size: 60px;
        font-family: 'Inter' ,serif;
        font-weight: 600;
        transition: all 0.5s ease;
    }
    .bio {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 18px;
        transition: all 0.5s ease;
    }
</style>
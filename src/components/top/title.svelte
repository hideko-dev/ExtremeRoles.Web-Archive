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
        <p class="bio" style="opacity: {bioOpacity}">AmongUs Mod for advanced users.</p>
    </div>
</div>

<style>
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content {
        text-align: center;
    }
    .big {
        font-size: 70px;
        font-family: 'Inter' ,serif;
        font-weight: 600;
        transition: all 0.5s ease;
    }
    .bio {
        font-family: 'Inter', sans-serif;
        width: 100%;
        margin: 0 auto;
        font-size: 15px;
        transition: all 0.5s ease;
    }
    @media (max-width: 600px) {
        .big {
            font-size: 50px;
        }
    }
</style>
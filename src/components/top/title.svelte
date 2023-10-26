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
        <p class="bio" style="opacity: {bioOpacity}">Very powerful, designed for advanced users, and mods for many things, AmongUs.</p>
    </div>
</div>

<style>
    .title {
        display: flex;
        align-items: center;
    }
    .content {
        margin: 0 0 auto 10%;
    }
    .big {
        font-size: 90px;
        font-family: 'Inter' ,serif;
        font-weight: 600;
        transition: all 0.5s ease;
    }
    .bio {
        font-family: 'Inter', sans-serif;
        width: 70%;
        font-size: 20px;
        transition: all 0.5s ease;
    }
    @media (max-width: 600px) {
        .big {
            font-size: 50px;
        }
    }
</style>
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
        <p class="big" style="opacity: {titleOpacity}">Extreme Roles</p>
        <p class="bio" style="opacity: {bioOpacity}">Extreme Experience for your AmongUs</p>
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
        font-size: 85px;
        font-family: 'Inter' ,serif;
        font-weight: 600;
        transition: all 0.5s ease;
    }
    .bio {
        font-family: 'Inter', sans-serif;
        width: 100%;
        margin-block: 10px;
        font-size: 20px;
        transition: all 0.5s ease;
        color: #797878;
    }
    @media (max-width: 600px) {
        .big {
            font-size: 50px;
        }
    }
</style>
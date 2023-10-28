<script>
    import {onMount} from "svelte";
    let height = 0;
    onMount(() => {
        setTimeout(() => {
            height = 20
        }, 500);
    });
</script>

<div class="image" style="height: {height}rem">
    <p>もちろんここに貼りますよね？</p>
</div>

<style>
    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 75px auto 0;
        background: #262626;
        width: 35rem;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
</style>
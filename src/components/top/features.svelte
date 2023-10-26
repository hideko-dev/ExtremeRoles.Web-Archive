<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Fa from "svelte-fa";
    import { faBolt, faCloud, faDiceD6, faFire, faLanguage } from "@fortawesome/free-solid-svg-icons";
    import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
    let width = 0;
    let borderColor = "transparent";
    let bgColor = "transparent";
    const featureArray = [
        { title: 'とても強力', icon: faBolt },
        { title: '80以上の役職', icon: faFire },
        { title: 'オープンソース', icon: faGithubAlt },
        { title: '迅速アップデート', icon: faDiceD6 },
        { title: 'APIの搭載', icon: faCloud },
        { title: '多言語対応', icon: faLanguage },
    ];
    let currentIndex = 0;
    let isVisible = true;
    let contentOpacity = 0;
    onMount(() => {
        setTimeout(() => {
            contentOpacity = 1;
        }, 800);
        setTimeout(() => {
            width = 190;
            borderColor = "#2d2d2d";
            bgColor = "rgba(30, 30, 30, 0.6)"
        }, 500)
        setInterval(() => {
            isVisible = false;
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % featureArray.length;
                isVisible = true;
            }, 300);
        }, 1500);
    });
</script>

<style>
    .card {
        height: 50px;
        border: 1px solid;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: all 0.3s ease;
        user-select: none;
    }

    .feature {
        display: flex;
        align-items: center;
        width: 90%;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    .icon {
        background: #ffffff;
        color: #313131;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 8px;
    }
    .title {
        margin-left: 0.5rem;
        white-space: nowrap;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: 500;
    }
    .visible {
        opacity: 1;
    }
</style>

<div class="card" style="width: {width}px; border-color: {borderColor}; background: {bgColor}">
    {#each featureArray as feature, index}
        {#if index === currentIndex}
            <div in:fade={{duration: 300}} class="{isVisible ? 'feature visible' : 'feature'}" style="opacity: {contentOpacity}">
                <div class="icon">
                    <Fa icon={feature.icon} fw/>
                </div>
                <p class="title">{feature.title}</p>
            </div>
        {/if}
    {/each}
</div>

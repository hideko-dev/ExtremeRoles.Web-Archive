<script>
    import {faCircle} from "@fortawesome/free-solid-svg-icons";

    export let href = "";
    export let icon = faCircle;
    export let text = "Text";
    import { onMount } from 'svelte';
    import { ripple } from "svelte-ripple-action";
    import Fa from "svelte-fa";
    let width = 0;
    let borderColor = "transparent";
    let bgColor = "transparent";
    let contentOpacity = 0;
    onMount(() => {
        setTimeout(() => {
            width = 160;
            borderColor = "#2d2d2d";
            bgColor = "rgba(30, 30, 30, 0.6)"
        }, 500)
        setTimeout(() => {
            contentOpacity = 1;
        }, 800);
    });
</script>

<a   
    use:ripple={{ color: "rgba(255,255,255,0.15)" }}
    href={href}
    class="button"
    style="width: {width}px;
    border-color: {borderColor};
    background: {bgColor}"
    on:mouseenter={() => {borderColor = "#8d8d8d";}} on:mouseleave={() => {borderColor = "#2d2d2d";}}>
    <div class="content" style="opacity: {contentOpacity}">
        <div class="icon">
            <Fa icon={icon}/>
        </div>
        <p>{text}</p>
    </div>
</a>


<style>
    .button {
        height: 50px;
        border: 1px solid;
        border-radius: 10px;
        display: flex;
        align-items: center;
        overflow: hidden;
        transition: all 0.3s ease;
        white-space: nowrap;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: 500;
        user-select: none;
        text-decoration: none;
    }
    .button:hover {
        cursor: pointer;
    }
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
    }
    .button p {
        margin-left: 5px;
        color: white;
    }
    .icon {
        margin-left: 0.6rem;
        background: #ffffff;
        color: #313131;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 8px;
    }
</style>
<script>
    import {createBetween, createSingleBool} from "../../lib/scroll.js";
    import Fa from "svelte-fa";
    let opacity = 1;
    import { fade } from "svelte/transition";
    import {faBolt, faFire, faGear} from "@fortawesome/free-solid-svg-icons";
    const l1 = createBetween(1000, 1800);
    const l2 = createBetween(1200, 1800);
    const l3 = createBetween(1400, 1800);
    let icon = faBolt;
    let parcent = 50;
    function toggleOpacity() {
        opacity = 0;
        setTimeout(() => {
            opacity = 1
        }, 300);
    }
    $: {
        if ($l1 && $l2 && $l3) {
            toggleOpacity()
            parcent = 44;
            icon = faGear
        } else if ($l1 && $l2) {
            toggleOpacity()
            parcent = 46.5;
            icon = faFire
        } else if ($l1) {
            parcent = 49.5;
            icon = faBolt
        }
    }
</script>

<div class="user">
    <div class="img" style={`opacity: ${$l1 ? 1 : 0}`}>
        <div class="icon" style="opacity: {opacity}">
            <Fa fw icon={icon}/>
        </div>
    </div>
    <div class="texts" style="top: {parcent}%">
        <p style={`opacity: ${$l1 ? 1 : 0}`}>For Advanded User</p>
        <p style={`opacity: ${$l2 ? 1 : 0}`}>80+ Roles</p>
        <p style={`opacity: ${$l3 ? 1 : 0}`}>700+ Options</p>
    </div>
</div>

<style>
    .user {
        height: 2000px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .texts {
        position: fixed;
        left: 60%;
        transform: translateX(-50%);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 40px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    .texts p {
        transition: all 0.4s ease;
        margin-inline: 10px;
    }
    .img {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 44%;
        top: 42%;
        width: 12rem;
        height: 12rem;
        background: #282828;
        border-radius: 10px;
        transform: translateX(-50%);
        font-family: 'Inter', sans-serif;
        font-size: 100px;
        transition: all 0.3s ease;
    }
    .icon {
        transition: all 0.5s ease;
    }
</style>
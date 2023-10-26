<script>
    import {createBetween, createSingleBool} from "../../lib/scroll.js";
    import Fa from "svelte-fa";
    import { fade } from "svelte/transition";
    import {faBolt, faFire, faGear} from "@fortawesome/free-solid-svg-icons";
    const l1 = createBetween(1000, 1800);
    const l2 = createBetween(1200, 1800);
    const l3 = createBetween(1400, 1800);
    let icon = faBolt;
    let parcent = 3;
    let rotate = 0;
    function rotation() {
        if(rotate === 0){
            rotate = 360
        } else {
            rotate = 0
        }
    }
    $: {
        if ($l1 && $l2 && $l3) {
            rotation()
            parcent = 10;
            icon = faGear
        } else if ($l1 && $l2) {
            rotation()
            parcent = 6.8;
            icon = faFire
        } else if ($l1) {
            rotation()
            parcent = 3.5;
            icon = faBolt
        }
    }
</script>

<div class="user">
    <div class="contents">
        <div class="img" style={`opacity: ${$l1 ? 1 : 0}`}>
            <div class="icon" style="rotate: {rotate}deg">
                <Fa fw icon={icon}/>
            </div>
        </div>
        <div class="texts" style="height: {parcent}rem">
            <p style={`opacity: ${$l1 ? 1 : 0}`}>For Advanded User</p>
            <p style={`opacity: ${$l2 ? 1 : 0}`}>80+ Roles</p>
            <p style={`opacity: ${$l3 ? 1 : 0}`}>700+ Options</p>
        </div>
    </div>
</div>

<style>
    .user {
        height: 2000px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contents {
        position: fixed;
        top: 42%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .texts {
        margin-left: 1rem;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 40px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    .texts p {
        transition: all 0.4s ease;
        margin-inline: 10px;
        margin-block: 5px;
    }
    .img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 12rem;
        height: 12rem;
        background: #1f1f1f;
        border-radius: 10px;
        font-family: 'Inter', sans-serif;
        font-size: 100px;
        transition: all 0.3s ease;
    }
    .icon {
        transition: all 0.5s ease;
    }
</style>
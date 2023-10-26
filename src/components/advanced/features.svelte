<script>
    import {createBetween} from "../../lib/scroll.js";
    const role = createBetween(1600, 1800);
    const option = createBetween(1700, 1900);
</script>

<div class="feature">
    <div class="contents">
        <div class="texts">
            <p style={`opacity: ${$role ? 1 : 0}`}>80+ Roles</p>
            <p style={`opacity: ${$option ? 1 : 0}`}>700+ Options</p>
        </div>
        <div class="underline" style={`width: ${$option ? 65 : 0}%`}/>
    </div>
</div>

<style>
    .feature {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .underline {
        position: fixed;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        height: 3px;
        background: linear-gradient(to right, transparent, #5e00ff, transparent);
        transition: all 0.4s ease;
    }
    .contents {
        height: 6rem;
        width: 100%;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
    }
    .texts {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 70px;
    }
    .texts p {
        transition: all 0.4s ease;
        margin-inline: 30px;
        white-space: nowrap;
    }
</style>
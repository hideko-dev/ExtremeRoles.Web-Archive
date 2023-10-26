<script>
    import {createBetween, createSingleBool} from "../../lib/scroll.js";
    const text_for = createBetween(900, 1200);
    const text_advanced = createBetween(1000, 1300);
    const text_user = createBetween(1100, 1400);
    // let fontsize = 70;
    //
    // $: {
    //     if ($text_for && $text_advanced && $text_user) {
    //         fontsize = 55;
    //     } else if ($text_for && $text_advanced) {
    //         fontsize = 60;
    //     } else if ($text_for) {
    //         fontsize = 65;
    //     } else {
    //         fontsize = 70;
    //     }
    // }
</script>

<div class="user">
    <p style="position: fixed; color: white; left: 0; top: 0;">でばっぐ用: {$text_for} , {$text_advanced}, {$text_user}</p>
    <div class="texts">
        <p style={`opacity: ${$text_for ? 1 : 0}`}>For</p>
        <p style={`opacity: ${$text_advanced ? 1 : 0}`}>Advanced</p>
        <p style={`opacity: ${$text_user ? 1 : 0}`}>Users</p>
    </div>
</div>

<style>
    .user {
        height: 1500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .texts {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 70px;
    }
    .texts p {
        transition: all 0.4s ease;
        margin-inline: 10px;
    }
</style>
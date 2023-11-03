<script>
    import { createBetween } from "../../lib/scroll.js";
    const l1 = createBetween(850, 3000);
    const l2 = createBetween(1050, 3000);
    const l3 = createBetween(1250, 3000);
    const l4 = createBetween(1450, 3000);
    const l5 = createBetween(1650, 3000);
    const l6 = createBetween(1850, 3000);
    const final = createBetween(1900, 3000);
</script>

<div class="advanced">
    <div class="content">
        <div class="texts">
            <div style="width: 100%">
                <p class="text" style={`opacity: ${$l1 ? 1 : 0}; background-position-x: ${$final ? 90 : 100}%;`}>80以上の役職</p>
                <p class="text" style={`opacity: ${$l2 ? 1 : 0}; background-position-x: ${$final ? 70 : 100}%;`}>700以上のオプション</p>
                <p class="text" style={`opacity: ${$l3 ? 1 : 0}; background-position-x: ${$final ? 50 : 100}%;`}>多言語に対応</p>
                <p class="text" style={`opacity: ${$l4 ? 1 : 0}; background-position-x: ${$final ? 40 : 100}%;`}>カスタマイズ性の高さ</p>
                <p class="text" style={`opacity: ${$l5 ? 1 : 0}; background-position-x: ${$final ? 70 : 100}%;`}>迅速なアップデート対応</p>
                <p class="text" style={`opacity: ${$l6 ? 1 : 0}; background-position-x: ${$final ? 90 : 100}%;`}>専用サーバーの保持</p>
            </div>
        </div>
    </div>
</div>

<style>
    .advanced {
        height: 1000vh;
        width: 100%;
        z-index: 0;
    }
    .texts {
        position: fixed;
        height: 100vh;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        text-align: left;
        display: grid;
        grid-template-columns: 1fr;
    }
    .text {
        width: 100%;
        height: 16.7%;
        transition: background-color 0.3s ease,
            opacity 0.3s ease,
            background-color 0.3s ease,
            background-position 0.3s ease;
        font-size: 30px;
        display: flex;
        align-items: center;
        padding-inline: 10rem;
        font-family: 'Noto Sans JP Variable', sans-serif;
        font-weight: 600;
        background: linear-gradient(to right, blue, black), no-repeat;
        background-size: 200%;
        background-position-x: 100%;
    }
</style>
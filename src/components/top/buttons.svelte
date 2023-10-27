<script>
    import Btn from "./btn.svelte";
    import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
    import {faBook, faHeart} from "@fortawesome/free-solid-svg-icons";
</script>

<div class="btn">
    <div class="b"><Btn href="https://discord.com" text="ディスコード" icon={faDiscord}/></div>
    <div class="b"><Btn href="https://exr-docs.vercel.app" text="ドキュメント" icon={faBook}/></div>
    <div class="b"><Btn href="https://github.com/yukieiji/ExtremeRoles" text="リポジトリ" icon={faGithub}/></div>
    <div class="b"><Btn href="https://sponsers.com" text="スポンサー" icon={faHeart}/></div>
</div>

<style>
    .b {
        scale: 1.12;
        margin-inline: 18px;
    }
    .btn {
        padding: 20px;
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 750px) {
        .btn {
            display: grid;
            grid-template-columns: repeat(2, 0fr);
            grid-gap: 10px;
        }
    }
</style>
<script>
    import Btn from "./btn.svelte";
    import {faDiscord, faGithub} from "@fortawesome/free-brands-svg-icons";
    import {faBook, faHeart} from "@fortawesome/free-solid-svg-icons";

    const showButton = [
        { herf: "https://github.com/yukieiji/ExtremeRoles/releases/latest",  text: "最新版のダウンロード", icon: "", },
        { herf: "https://yukieiji.github.io/ExtremeRoles.Docs/",  text: "Wiki", icon: faBook, },
        { herf: "https://discord.com",  text: "Discord", icon: faDiscord, },
        { herf: "https://github.com/sponsors/yukieiji",  text: "スポンサー", icon: faHeart, }
    ]

</script>

<div class="buttonRow">
    {#each showButton as button}
    <div class="button">
        <Btn href={button.herf} text={button.text} icon={button.icon}/>
    </div>
    {/each}
</div>

<style>
    .buttonRow {
        padding: 20px;
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
        row-gap: 27px;
        flex-wrap: wrap;
    }
    .button {
        scale: 1.125;
        margin-inline: 27px;
    }
    @media (max-width: 750px) {
        .button {
            display: grid;
            grid-template-columns: repeat(2, 0fr);
            grid-gap: 10px;
        }
    }
</style>
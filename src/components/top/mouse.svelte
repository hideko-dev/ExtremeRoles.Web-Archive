<style>
    .scroll {
        position: absolute;
        left: 12%;
        top: 85%;
        height: 50px;
    }

    .scroll::after{
        content: "";
        position: absolute;
        top: 0;
        width: 1px;
        height: 30px;
        background: #eee;
        animation: scroll 1.4s ease-in-out infinite;
        opacity:0;
    }

    @keyframes scroll {
        0%{
            height:0;
            top:0;
            opacity: 0;
        }
        50%{
            height:30px;
            opacity: 1;
        }
        100%{
            height:0;
            top:50px;
            opacity: 0;
        }
    }
</style>

<div class="scroll"/>

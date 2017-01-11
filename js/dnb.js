var _html,video_html,first_pos=500,second_pos=1e3,third_pos=2e3,fourth_pos=2500,final_pos=4500,end_pos=5200,scr_count,ALBUM_ON=!1,LIVE_ON=!1,MOVIE_ON=!1,ACT_ON=!1,MES_ON=!1,END=!1;
$(function () {$(".modal").modal(),$(".album-info").hide(),$(".live-info").hide(),$(".movie-info").hide(),$(".act-info").hide(),$(".messages").hide(),$(".collapsible").hide();
    _html = "<br><p>1inamillion 1st mini album</p><h5 style="font-weight:500;">DYNAMITE NAMA-BEER</h5><br><p>1.Blue</p><p>2.Super Summer Line</p><p>3.1000000gravity</p><p>4.Utopia</p><p>5.3mangrove</p><p>6.Shoes</p><br><p>2017.02.04 OUT / <span style="font-style:italic;">1,000 JPY</span></p>";
      $(".album-info").append(_html);    
$(window).scroll(function () {
    scr_count = $(document).scrollTop();
//         console.log(scr_count);
    if (scr_count > first_pos && ALBUM_ON == false) {
            _html = (function () {/*
            <br>
            <p>1inamillion Presents</p>
            <p>"DYNAMITE NAMA-BEER" RELEASE PARTY</p>
            <h5 style="font-weight:900;">PLAYLAND</h5>
            <p><b>2017.02.04 at KICHIJOJI-WARP</b></p>
            <br>
            <p>1inamillion</p>
            <p>CARNIVAL</p>
            <p>sprawl</p>
            <p>the mantle brothers</p>
            <p>AGATHA</p>
            <br>
            <p>OPEN 17:30 / START 18:00</p>
            <p>Admission Fee / <span style="font-style:italic;">2,000 JPY</span></p>            
            */}).toString().replace(/(\n)/g, '').split('*')[1];
            $(".live-info").append(_html);
            $('.album-info').show();
            ALBUM_ON = true;
        }

        if (scr_count > second_pos && LIVE_ON == false) {
            $('.live-info').show();
            $('.collapsible').show();
            LIVE_ON = true;
        }

        if (scr_count > third_pos && MOVIE_ON == false) {
            _html = (function () {/*
            <br>
            <div class="col s12 m12">
                <div class="card">
                <div class="card-image">
                    <img src="img/1inamillion.jpg">
                    <span class="card-title"><b>1inamillion</b></span>
                </div>
                <div class="card-content">
                    <p>Instrumental emo post rock band from Tokyo, Japan.</p>
                    <p>We'll show you amazing live performance and excited power of band sound without HUMAN VOICE!</p>
                    <p>Please watch our live videos from links below, and follow us on Twitter if you get interested.</p>            
                </div>
                <div class="card-action right-align">
                    <a class="btn blue" href="https://twitter.com/1inamillion_jpn" target="_blank">TWITTER</a>            
                    <a class="waves-effect waves-light btn red" href="https://youtu.be/i45XqfyOflg" target="_blank">VIDEO</a>
                </div>
                </div>
            </div>

            <div class="col s12 m6">
                <div class="card">
                <div class="card-image">
                    <img src="img/carnival.jpg">
                    <span class="card-title"><b>CARNIVAL</b></span>
                </div>
                <div class="card-content">
                    <p>The most emotional instrumental rock band in Kichijoji, Japan. </p>
                </div>
                <div class="card-action right-align">
                    <a class="waves-effect waves-light btn red" href="https://youtu.be/VAgRzRGbsWE" target="_blank">VIDEO</a>
                </div>
                </div>
            </div>

            <div class="col s12 m6">
                <div class="card">
                <div class="card-image">
                    <img src="img/sprawl.jpg">
                    <span class="card-title"><b>sprawl</b></span>
                </div>
                <div class="card-content">
                    <p>All the members of this band are always friendly and affluence.</p>
                </div>
                <div class="card-action right-align">
                    <a class="waves-effect waves-light btn red" href="https://youtu.be/EosGz97fqEY" target="_blank">VIDEO</a>          </div>
                </div>
            </div>

            <div class="col s12 m6">
                <div class="card">
                <div class="card-image">
                    <img src="img/mantle.jpg">
                    <span class="card-title"><b>the mantle brothers</b></span>
                </div>
                <div class="card-content">
                    <p>Minimal but giving you fun a lot, let's dance with them!</p>
                </div>
                <div class="card-action right-align">
                    <a class="waves-effect waves-light btn red" href="https://youtu.be/TBL6YS_KtEo" target="_blank">VIDEO</a>
                </div>
                </div>
            </div>

            <div class="col s12 m6">
                <div class="card">
                <div class="card-image">
                    <img src="img/agatha.jpg">
                    <span class="card-title"><b>AGATHA</b></span>
                </div>
                <div class="card-content">
                    <p>Crazy talented instrumental math-rock trio from Kita-Senju, Tokyo.</p>
                </div>
                <div class="card-action right-align">
                    <a class="waves-effect waves-light btn red" href="https://youtu.be/Wu8JUxB7a3k" target="_blank">VIDEO</a></div>
                </div>
            </div>               
            */}).toString().replace(/(\n)/g, '').split('*')[1];
            $(".act-info").append(_html);
            $('.movie-info').show();
            MOVIE_ON = true;
        }

        if (scr_count > fourth_pos && ACT_ON == false) {
            _html = (function () {/*
            <h5> Thank you for visiting us!</h5>
            <p>We are looking forward to meeting you at our release party!</p>
            <p>Latest infomation will be announced by our Twitter account,</p>
            <p>please check and follow us.</p>
            <a href="https://twitter.com/1inamillion_JPN" target="_blank" class="twitter-follow-button" data-show-count="false">@1inamillion_JPN</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
            */}).toString().replace(/(\n)/g, '').split('*')[1];
            $(".messages").append(_html);
            $('.act-info').show();            
            ACT_ON = true;
        }

        if (scr_count > final_pos && MES_ON == false) {
            $('.messages').show();
            MES_ON = true;
        }

        if (scr_count > end_pos && END == false) {
            $('.blank-space').slideUp();
            END = true;
        }
    });
});

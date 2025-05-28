$(function () {
    //로딩페이지
    $('.loading_wrap').addClass('on');

    setTimeout(function(){
        $('#loading').slideUp(700);
    }, 3500);



    //풀페이지
    var myFullpage = new fullpage('#fullpage', {
        sectionsColor: ['#fff'],
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        navigation: false,
        navigationPosition: 'left',
        navigationTooltips: ['Page 1', 'Page 2', 'Any text!'],
        showActiveTooltip: true,
        menu: '#menu',
        responsiveWidth: 900,
    });



    
});
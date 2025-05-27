$(function () {
    var myFullpage = new fullpage('#fullpage', {
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Page 1', 'Page 2', 'Any text!'],
        showActiveTooltip: true,
        menu: '#menu',
        responsiveWidth: 900,
    });
});
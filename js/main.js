$(function () {
    //로딩페이지
    $('.loading_wrap').addClass('on');

    setTimeout(function () {
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



    //메인타이틀
    //gsap
    gsap.registerPlugin(CustomEase, CustomBounce, SplitText);

    CustomBounce.create("myBounce", {
        strength: 0.6,
        squash: 1.5,
        squashID: "myBounce-squash"
    });

    const splitTxt = new SplitText("#txt").chars;

    const tl = gsap.timeline({ defaults: { duration: 1.5, stagger: { amount: 0.1, ease: 'sine.in' } } })
        .from(splitTxt, {
            duration: 0.6,
            opacity: 0,
            ease: "power1.inOut"
        }, 0)
        .from(splitTxt, {
            y: -350,
            ease: "myBounce"
        }, 0)
        .to(splitTxt, {
            scaleX: 1.8,
            scaleY: 0.7,
            rotate: (i) => 15 - 30 * Math.random(),
            ease: "myBounce-squash",
            transformOrigin: "50% 100%"
        }, 0)

    window.onclick = () => tl.play(0)
});
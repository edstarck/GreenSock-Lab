(function ($) {
  var $body = $('body'),
    $coin = $('#Coin'),
    path = [
      { x: -90, y: 120 },
      { x: -45, y: -220 },
      { x: 0, y: 120 },
    ],
    $BulbIdea = $('#BulbIdea'),
    $BulbIdeaLight = $('#MainBulb2'),
    $part1 = $('#Part1'),
    $Petr = $('#Petr'),
    $h1 = $('h1'),
    $MainBulb = $('#MainBulb'),
    $Liquids = $('.liquid'),
    $Liquid01 = $('#Liquid1'),
    $Liquid02 = $('#Liquid2'),
    $Liquid03 = $('#Liquid3'),
    $Liquid04 = $('#Liquid4'),
    $Liquid05 = $('#Liquid5'),
    $Liquid06 = $('#Liquid6'),
    $Liquid07 = $('#Liquid7'),
    $Liquid08 = $('#Liquid8'),
    $Liquid09 = $('#Liquid9'),
    $LiquidInsideMask01 = $('#LiquidInside1Mask'),
    $LiquidInsideMask02 = $('#LiquidInside2Mask'),
    $LiquidInsideMask03 = $('#LiquidInside3Mask'),
    $LiquidInsideMask04 = $('#LiquidInside4Mask'),
    $LiquidInsideMask05 = $('#LiquidInside5Mask'),
    $LiquidInsideMask06 = $('#LiquidInside6Mask'),
    $LiquidInsideMask07 = $('#LiquidInside7Mask'),
    $bulb1 = $('#Bulb1 .bulb'),
    $bulb2 = $('#Bulb2 .bulb'),
    $bulb3 = $('#Bulb3 .bulb'),
    $meterBcg = $('#meterBcg'),
    $meterStroke = $('#meterStroke'),
    $part2light = $('#Part2 .light'),
    $part2lightLeft = $('#Part2 .light-left'),
    $part2lightMid = $('#Part2 .light-mid'),
    $part2lightRight = $('#Part2 .light-right'),
    $printerLightsTop = $('#PrinterLIghtTop, #PrinterLIghtTop_2_'),
    $printerLightsBottom = $('#PrinterLIghtBottom, #PrinterLIghtBottom_1_'),
    $mainLight = $('#MainLight'),
    $paper = $('#Paper'),
    $paperText = $('#PaperText text'),
    $slider = $('#slider'),
    $pointer = $('#pointer'),
    $stage = $('#stage'),
    $MainMask = $('#MainMask'),
    $smile = $('#smile'),
    mainTl = new TimelineMax();

  function clearStage() {
    var clearTl = new TimelineMax();

    clearTl
      .set($coin, {
        x: -90,
        y: 120,
        scale: 0.5,
        transformOrigin: 'center center',
      })
      .set($MainBulb, { fill: '#ffffff' })
      .set($Liquids, { stroke: '#ffffff' })
      .set($Petr, {
        autoAlpha: 1,
        x: '1400%',
        scale: 2.5,
        transformOrigin: 'bottom center',
      })
      .set($stage, { autoAlpha: 0.5 })
      .set($MainMask, { attr: { x: 932 } })
      // Clear liquid
      .set($LiquidInsideMask01, { attr: { y: 492 } }) /* y value = y + height */
      .set($LiquidInsideMask02, { attr: { y: 494 } }) /* 451+43 */
      .set($LiquidInsideMask03, { attr: { y: 491 } })
      .set($LiquidInsideMask04, { attr: { y: 656 } })
      .set($LiquidInsideMask05, { attr: { y: 654 } })
      .set($LiquidInsideMask06, { attr: { y: 651 } })
      .set($LiquidInsideMask07, { attr: { y: 651 } })
      .set($pointer, { rotation: -45, transformOrigin: 'bottom center' })
      .set($paper, { y: '+=55' });

    return clearTl;
  }

  function getIntroTl() {
    var introTL = new TimelineMax();

    introTL
      .set($h1, { y: '-=40px' })
      .to($Petr, 0.8, { x: '1000%', ease: Power4.easeInOut })
      .fromTo(
        $h1,
        0.5,
        { x: '-46%', autoAlpha: 0 },
        { x: '-50%', autoAlpha: 1 },
        '-=0.4'
      )
      .fromTo(
        $smile,
        0.4,
        { scale: 0.4, transformOrigin: 'center center' },
        { scale: 1, ease: Power4.easeInOut },
        '+=1.2'
      )
      .add('zoom-out')
      .to(
        $Petr,
        1,
        { x: '0%', scale: 1, ease: Power4.easeInOut },
        'zoom-out+=1'
      )
      .to($h1, 0.5, { autoAlpha: 0 }, 'zoom-out+=1')
      .to(
        $MainMask,
        1,
        { attr: { x: 131 }, ease: Power4.easeInOut },
        'zoom-out+=1'
      )
      .set($body, { className: '+=is-active' }, 'zoom-out+=1')
      .set($h1, { y: '-=60px', text: 'and this is my GreenSock Lab!' }) // update heading text
      .add('text-in')
      .to(
        $h1,
        0.3,
        { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut },
        'text-in'
      )
      .to(
        $h1,
        0.2,
        { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut },
        '+=2.5'
      )
      .set($h1, { y: '-=30px', text: "Let's have some fun..." })
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
      .to(
        $h1,
        0.2,
        { y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut },
        '+=2'
      )
      .to($stage, 0.2, { autoAlpha: 1, ease: Power0.none }, '-=0.2');

    introTL.seek('text-in');

    return introTL;
  }

  function getIdeaTl() {
    var ideaTL = new TimelineMax();

    ideaTL
      // got idea
      .set($BulbIdea, { autoAlpha: 1, immediateRender: false })
      .from($BulbIdea, 0.5, { y: '+=40px', ease: Bounce.easeOut })
      .fromTo(
        $BulbIdeaLight,
        0.3,
        { fill: '#ffffff' },
        { fill: '#73C996', repeat: 3, yoyo: true }
      )
      .fromTo(
        $BulbIdeaLight,
        0.3,
        { fill: '#ffffff' },
        { fill: '#F8876E', repeat: 3, yoyo: true }
      )
      .fromTo($BulbIdeaLight, 0.8, { fill: '#ffffff' }, { fill: '#F8AD43' })
      .to($BulbIdea, 0.6, {
        y: '-=20px',
        scale: 1.1,
        transformOrigin: 'center bottom',
        ease: Power4.easeOut,
      })
      .to($BulbIdea, 0.2, { y: '+=120px', scale: 0.8, ease: Back.easeIn })

      // idea out of the head
      .set($coin, { autoAlpha: 1 }, '+=0.3')
      .to($coin, 6, {
        rotation: 720,
        bezier: { curviness: 0.3, values: path },
        ease: SlowMo.ease.config(0.9, 0.7, false),
      })
      .to($part1, 0.06, {
        rotation: 5,
        y: '+=5px',
        x: '+=3px',
        transformOrigin: 'bottom right',
        repeat: 5,
        yoyo: true,
      });

    return ideaTL;
  }

  function getPart2Tl() {
    var part2TL = new TimelineMax();

    part2TL
      .add('part2-lights')
      .to($pointer, 2, { rotation: 20 })
      .staggerTo($part2light, 0.1, { fill: '#F8AD43' }, 0.1, 'part2-lights')
      .staggerTo(
        $part2light,
        0.1,
        { fill: '#F8876E' },
        0.1,
        'part2-lights+=0.5'
      )
      .staggerTo($part2light, 0.1, { fill: '#73C996' }, 0.1, 'part2-lights+=1')
      .to($meterBcg, 0.2, { fill: '#5AB783' }, 'part2-lights+=1.2')
      .to($meterStroke, 0.2, { stroke: '#448962' }, 'part2-lights+=1.2')
      .to(
        $slider,
        1.2,
        { x: '-=10px', ease: Power4.easeInOut },
        'part2-lights+=1.4'
      )
      .set($bulb1, { fill: '#5AB783' }, 'part2-lights+=2.6')
      .set($bulb2, { fill: '#F8876E' }, 'part2-lights+=3')
      .set($bulb3, { fill: '#F8AD43' }, 'part2-lights+=3.4');

    return part2TL;
  }

  function getFillTubesTl() {
    var fillTubesTL = new TimelineMax();

    var liquidLength = [131, 213, 228, 124, 124, 124, 101, 345, 393];

    // Reset all liquids to invisible - there are a few exceptions
    $Liquids.each(function (index, element) {
      TweenMax.set(element, {
        strokeDasharray: liquidLength[index],
        strokeDashoffset: liquidLength[index],
      });
    });

    fillTubesTL
      .set($Liquids, { stroke: '#F8876E' })
      .to($Liquid01, 2, { strokeDashoffset: 0, ease: Power0.easeNone })

      // create a tween
      .add('flask01')

      // add another one
      .add('flask02')
      .to(
        $Liquid03,
        0.5,
        { strokeDashoffset: 0, ease: Power0.easeNone },
        '-=0.1'
      )

      // add them to a timeline
      .add('flask03')
      .to($Liquid04, 0.5, { strokeDashoffset: 0, ease: Power0.easeNone })
      .to($Liquid05, 0.6, { strokeDashoffset: 0, ease: Power0.easeNone })

      // create multiple timelines
      .to($Liquid06, 0.7, { strokeDashoffset: 0, ease: Power0.easeNone })
      .add('flask04')
      // don't fill main flask yet
      .to($Liquid07, 1.4, { strokeDashoffset: 0, ease: Power0.easeNone })

      // fine tune easing
      .to($Liquid08, 1.5, { strokeDashoffset: 0, ease: Power0.easeNone })
      .add('flask06')

      .add('main-flask')

      // fill in all flasks
      .to(
        $LiquidInsideMask01,
        6,
        { attr: { y: 415 }, ease: Power0.easeNone },
        'flask01'
      )
      .to(
        $LiquidInsideMask02,
        8.4,
        { attr: { y: 451 }, ease: Power0.easeNone },
        'flask02'
      )
      .to(
        $LiquidInsideMask03,
        5,
        { attr: { y: 452 }, ease: Power0.easeNone },
        'flask03'
      )
      .to(
        $LiquidInsideMask04,
        4,
        { attr: { y: 602 }, ease: Power0.easeNone },
        'flask04'
      )
      .to(
        $LiquidInsideMask05,
        3,
        { attr: { y: 563 }, ease: Power0.easeNone },
        'main-flask'
      )
      .to(
        $LiquidInsideMask06,
        1.7,
        { attr: { y: 608 }, ease: Power0.easeNone },
        'flask06'
      )
      .to(
        $LiquidInsideMask07,
        1.7,
        { attr: { y: 608 }, ease: Power0.easeNone },
        'flask07'
      );

    return fillTubesTL;
  }

  function getFinalCTATl() {
    var finalCTATL = new TimelineMax();

    var lightsBlink = new TimelineMax({
      yoyo: true,
    });
    lightsBlink
      .fromTo(
        $printerLightsTop,
        0.1,
        { fill: '#5AB783' },
        { fill: '#F8AD43', immediateRender: false }
      )
      .fromTo(
        $printerLightsBottom,
        0.1,
        { fill: '#5AB783' },
        { fill: '#F8AD43', immediateRender: false },
        '+=0.2'
      )
      .fromTo(
        $printerLightsTop,
        0.1,
        { fill: '#F8AD43' },
        { fill: '#F8876E', immediateRender: false },
        '-=0.2'
      )
      .fromTo(
        $printerLightsBottom,
        0.1,
        { fill: '#F8AD43' },
        { fill: '#F8876E', immediateRender: false },
        '+=0.2'
      )
      .fromTo(
        $printerLightsTop,
        0.1,
        { fill: '#F8876E' },
        { fill: '#5AB783', immediateRender: false },
        '-=0.2'
      )
      .fromTo(
        $printerLightsBottom,
        0.1,
        { fill: '#F8876E' },
        { fill: '#5AB783', immediateRender: false },
        '+=0.2'
      );

    var hideAndSeek = new TimelineMax();
    hideAndSeek
      .set($paperText, { text: '&nbsp;FINISHED!' })
      .to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) });

    finalCTATL
      .fromTo(
        $MainBulb,
        0.05,
        { fill: '#ffffff' },
        { fill: '#F8AD43', repeat: 10, yoyo: true }
      )
      .add(lightsBlink, '2')
      .add(hideAndSeek, '3.5');

    return finalCTATL;
  }

  function init() {
    mainTl
      .add(clearStage())
      .add(getIntroTl(), 'scene-intro')
      .add(getIdeaTl(), 'scene-idea')
      .add(getPart2Tl(), 'scene-part2')
      .add(getFillTubesTl(), 'scene-tubes')
      .add(getFinalCTATl(), 'scene-final');
  }
  init();
})(jQuery);

$(function () {
  $(window).on("mousemove", mouseMove);
  function mouseMove(e) {
    let position = (e.pageX - $(window).width() / 2) * 0.1;
    //let positionSlow = (e.pageX - $(window).width() / 2) * 0.1;
    //let positionFast = (e.pageX - $(window).width() / 2) * 0.15;
    //마우스의 페이지 x값에서 반 나눈 윈도우 너비값을 뺄거임
    //원점을 잡기 위한 방법

    //console.log(position);

    //$(".spanSlow").css({ transform: "translateX(" + position + "px)" });
    //$(".spanFast").css({ transform: "translateX(" + -position + "px)" });
    //gsap.to(".spanSlow", { duration: 0.4, x: positionSlow });
    //gsap.to(".spanFast", { duration: 0.4, x: -positionFast });
    gsap.to(".spanSlow", { duration: 0.4, x: position });
    gsap.to(".spanFast", { duration: 0.4, x: -position });
  }
});

$(function () {
  //gnb 눌렀을 때 section 찾아가기
  $(".gnb li a").click(function () {
    console.log($(this.hash));
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    console.log(offsetElem.top);
    $("html,body").stop();
    $("html,body").animate({ scrollTop: offsetElem.top }, 1000);
  });
});

//on 클릭 제이쿼리
$(function () {
  $(".photoshop_works img").click(function () {
    $(this).next(".if_click").addClass("on");
  });
  $(".if_click").click(function () {
    $(this).removeClass("on");
  });
});

# introduce_page (포트폴리오 소개페이지)
제가 만든 작업물들을 소개하는 포트폴리오 소개페이지입니다.<br>
현재 계속 프로젝트를 추가, 수정중입니다.

## Link
* https://gayoung914.github.io/introduce/

## Tool
* HTML5
* CSS3
* SCSS
* Jquery
* gsap Plugin 
* swiper Plugin

## Skill
* 메인배너의 Interaction<br><br>
👉 on fucntion에 movsemove method를 이용하였습니다.<br> mousemove 이벤트를 이용하여 기준을 잡고, gsap Plugin을 이용하여 보다 더 부드러운 animation을 구현해보았습니다.
```
$(function () {
  $(window).on("mousemove", mouseMove);
  function mouseMove(e) {
    let position = (e.pageX - $(window).width() / 2) * 0.1;
    //원점을 잡기 위한 방법
    gsap.to(".spanSlow", { duration: 0.4, x: position });
    gsap.to(".spanFast", { duration: 0.4, x: -position });
  }
});
```
* Header의 Interaction<br><br>
👉 click method를 이용하여 a tag를 누르면 해당 해쉬태그가 있는 곳으로 이동할 수 있도록 코드를 작성해보았습니다.
```
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
```

## License
* design by 김가영

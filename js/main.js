// main.js 
window.addEventListener("load", () => {

   /* main_pulmuone 영상 슬라이드 */
   const btnNext = document.querySelector("a.btn_next"); // 다음 슬라이드 버튼
   const btnPrev = document.querySelector("a.btn_prev"); // 이전 슬라이드 버튼
   
   const slideWrap = document.querySelectorAll("li.slide"); // 영상 슬라이드 4개 0, 1, 2, 3
   const slideRoll = document.querySelectorAll(".slide_roll li"); // 슬라이드 동그라미 버튼 4개 0, 1, 2, 3
   
   
   let slideNum = 0;
   let lastNum = slideWrap.length - 1; // 마지막 번호가 되면 0으로 다시 돌아가야 함.
   
   // 반복적으로 작성해야 할 코드
   function activation(list, index, className) {
      list.forEach( item => {
         item.classList.remove(className);
      });
      list[index].classList.add(className);
   };
   
   // btnNext 다음 슬라이드 버튼
   btnNext.addEventListener("click", () => {
      slideNum++;
      if(slideNum > lastNum) slideNum = 0;
   
      activation(slideWrap, slideNum, "active");
      activation(slideRoll, slideNum, "on");
   });
   
   // btnPrev 이전 슬라이드 버튼
   btnPrev.addEventListener("click", () => {
      slideNum--;
      if(slideNum < 0) slideNum = lastNum;
   
      activation(slideWrap, slideNum, "active");
      activation(slideRoll, slideNum, "on");
   });
   
   // main_pulmuone 5초마다 다음 슬라이드로 넘어가기
   function autoSlide() {
      slideNum++;
      if(slideNum > lastNum) slideNum = 0;
   
      activation(slideWrap, slideNum, "active");
      activation(slideRoll, slideNum, "on");
   
      autoSlid = setTimeout(autoSlide, 16000);
   };
   let autoSlid = setTimeout(autoSlide, 16000);
   
   // 재생/멈춤 버튼
   const btnPlay = document.querySelector("div.slide_roll > a.btn_play"); // 재생/멈춤 버튼
   let play = true;
   
   btnPlay.addEventListener("click", (e) => {
      e.preventDefault();
   
      if(play) {
         // 멈춤 시작
         clearTimeout(autoSlid);
         btnPlay.classList.add("on");
         play = false;
      } else {
         // 재생 시작
         autoBnn = setTimeout(autoSlide, 16000);
         btnPlay.classList.remove("on");
         play = true;
      };
   });
   
   // 롤링버튼 클릭하면 색상 변경
   for(let i = 0; i < slideRoll.length; i++){ 
      slideRoll[i].addEventListener("click", e => { 
         e.preventDefault();
   
         activation(slideWrap, i, "active");
         activation(slideRoll, i, "on");
      });
   };
   
   
   // main_PC화면 스크롤 이벤트
   // content1은 스크롤 이벤트에 포함하지 않음.
   
   const contents = document.querySelectorAll("#container > div.conSc"); // content 5개 저장
   const quickLis = document.querySelectorAll("aside > .quick > li"); // navibar 4개 저장

   let devHeight = window.innerHeight;

   // PC화면일 때 화면 사이즈 조절할 때마다 innerHeight값 가져오기
   window.addEventListener("resize", () => {
      if(window.innerWidth >= 1025) {
         devHeight = window.innerHeight;
      };
   });
   
   // PC 화면에서만 일어나는 스크롤 이벤트
   if(window.innerWidth >= 1025){
      // contents 높이값 지정하기
      contents.forEach((element, index) => {
         if(index === 0){
            element.style.height = `${devHeight - 132}px`;
         } else {
            element.style.height = `${devHeight}px`;
         };
      });
      console.log(devHeight);
      
      // quickLis li 클릭했을 때 content 높이값 만큼씩 움직이기 첫번째 제외
      for(let i = 0; i < quickLis.length; i++){
         quickLis[i].addEventListener("click", e => {
            e.preventDefault();
      
            quickLis.forEach(item => {
               item.classList.remove("on");
            });
            quickLis[i].classList.add("on");
            
            window.scroll({
               top: (i+1)* devHeight,
               left: 0,
               behavior: "smooth"
            });


         });
      };
   
      // 마우스 휠을 내릴 때 다음 content의 top값으로 이동
      for(let i = 0; i < contents.length; i++){
         contents[i].addEventListener("wheel", e => {
            e.preventDefault();

            if( e.deltaY < 0){
               // wheel / scroll up
               let prev = contents[i].previousElementSibling.offsetTop;

               if (i === 1) {
                  prev -= 132;
               };

               window.scroll({
                  top: prev + 132,
                  left: 0,
                  behavior: "smooth"
               });

               } else {
                  if(i === contents.length-1){
                     let footer = document.querySelector("footer");
                     let footerHt = footer.offsetTop;

                     window.scroll({
                        top: footerHt,
                        left: 0,
                        behavior: "smooth"
                     });
                  } else {
                  let next = e.currentTarget.nextElementSibling.offsetTop;
            
                  window.scroll({
                     top: next + 132,
                     left: 0,
                     behavior: "smooth"
                  });

                  quickLis.forEach(item => {
                     item.classList.remove("on");
                  })
                  item[i].classList.add("on");

               };
            };
         });
      };
   };
});
// sub.js

window.addEventListener("load", () => {

   // sub1.html
   // sub_header 클릭하면 ul 내려오기
   const subHeader = document.querySelectorAll(".sub_header > ul li.sub1_aco"); // sub_header > ul > li 2개 저장

   subHeader.forEach(item => {
      item.addEventListener("click", e => {
         e.preventDefault();

         item.classList.toggle("on");
      })
   })

   // 클릭했을 때 (클래스 on 붙고 제거 함수
   function bgColor (title) {
      
      for(var c = 0; c < title.length; c++){
         title[c].addEventListener("click", e => {
            
            for(var n = 0; n < title.length; n++){
               title[n].classList.remove("on");
            };
            e.currentTarget.classList.add("on");
         });
      };
   }



   // ul.content_nav의 li를 클릭하면 배경, 글씨 색상 변경
   const contentNavAll = document.querySelectorAll("#container > ul.content_nav > li"); // li 8개 저장
   console.log(contentNavAll);
   // for(var c = 0; c < contentNavAll.length; c++){
   //    contentNavAll[c].addEventListener("click", e => {
         
   //       for(var n = 0; n < contentNavAll.length; n++){
   //          contentNavAll[n].classList.remove("on");
   //       };
   //       e.currentTarget.classList.add("on");
   //    });
   // };

   bgColor(contentNavAll);

   // invest_txt의 li 클릭하면 배경 색상
   const invextTxt = document.querySelectorAll(".invest_txt > li");

   bgColor(invextTxt);


   // 스크롤을 내릴 때 클래스 active 추가
   const elements = [
      document.querySelector('.spot p'),
      document.querySelector('.content_nav'),
      document.querySelector('.invest_txt'),
      document.querySelector('.invest_visual'),
      document.querySelector('.investment_title > h3'),
      document.querySelector('.investment_title > p'),
      document.querySelector('.finance'),
      document.querySelector('.stock'),
   ];



   let elementNum = 0;


   window.addEventListener("wheel", e => { // 윈도우의 휠을 내릴때 이벤트 발생할거야
      if(e.deltaY > 0) { // 스크롤을 내릴 때
         if(elementNum < elements.length) { // 만약 element의 개수가 7보다 작으면 0~7
            elements[elementNum].classList.add("active"); //  elements에 클래스 active 붙일거야
            elementNum++; // 하나씩 증가할거야
         } 
      }
   });

   // 0.5초 후에 클래스 active 붙이기
   const spot = document.querySelector('.spot p');
   const contentNav = document.querySelector('.content_nav');
   const investText = document.querySelector('.invest_txt');


   // sub2.html

   //  sub_header 클래스 on 붙으면 선택
   const sub2Header = document.querySelectorAll(".sub2_header > ul > li"); // li 2개 저장
   console.log(sub2Header);

   for(var i = 0; i < sub2Header.length; i++){
      sub2Header[i].addEventListener("click", e => {
         e.preventDefault();

         for(var s = 0; s < sub2Header.length; s++){
            sub2Header[s].classList.remove("on");
         };
         e.currentTarget.classList.add("on");
      })
   }

   // content_nav / min_content_nav
   const contentNavsub2 = document.querySelectorAll("#container > ul.content_nav_sub2 > li");
   const minNavsub2 = document.querySelectorAll("#container > ul.min_content_nav_sub2 > li");

   bgColor(contentNavsub2);
   bgColor(minNavsub2);







});
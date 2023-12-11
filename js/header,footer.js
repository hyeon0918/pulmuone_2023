// header,footer.js

window.addEventListener("load", () => {
    
    // 메뉴바 mouseover 하면 내려오기

    const headerWrap = document.querySelector(".header_wrap"); // div header_wrap
    const gnbMenu = document.querySelectorAll("nav.gnb > ul > li"); // 큰 li 안에 하위 li 4개 저장
    const subMenu = document.querySelectorAll("nav.gnb > ul > li > ul"); // 하위 li의 ul 4개 저장

    /* 주메뉴 풀다운 */
    for(var i = 0; i < gnbMenu.length; i++) {
    // mouseover
    gnbMenu[i].addEventListener("mouseover", (e) => {
        headerWrap.classList.add("on");
        subMenu.forEach(item => {
            item.classList.add("on");
        });
    });
    // mouseout
    gnbMenu[i].addEventListener("mouseout", (e) => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on");
        });
    });
    };

    // footer > family_box
    const familyBox = document.querySelector(".footer_inner > div > .family_box"); // family_box

    familyBox.addEventListener("click", e => {
        e.preventDefault();
        familyBox.classList.toggle("on");

        if(e.currentTarget.classList.contains("on")) {
            familyBox.children[0].setAttribute("title", "닫기");
        } else {
            familyBox.children[0].setAttribute("title", "열기");
        };
    });

    // 모바일 / 태블릿
    // 햄버거 버튼
    const minBtn = document.querySelector(".minBtn"); // 햄버거 버튼

    const body = document.querySelector("body");
    const bg = document.querySelector("div.bg");

    const minBtnBox = document.querySelector("div.minBtn_box"); // 전체보기 메뉴
    const minBtnClose = document.querySelector("div.minBtn_close"); // 전체보기 닫기 버튼


    minBtn.addEventListener("click", e => {
    e.preventDefault();

    body.classList.add("on");
    bg.classList.add("on");
    minBtnBox.classList.add("on");
    });

    minBtnClose.addEventListener("click", e => {
    e.preventDefault();

    body.classList.remove("on");
    bg.classList.remove("on");
    minBtnBox.classList.remove("on");
    minBtnClose.classList.remove("on");

    // 모바일 / 태블릿 주메뉴에 붙어있는 클래스 on도 같이 제거
    gnbAco.forEach(item => {
        item.classList.remove("on");
    });

    });

    // 모바일 / 태블릿 검색박스
    const minSrchBox = document.querySelector("form.min_srchbox"); // 검색박스
    const minSrchOpen = document.querySelector(".min_srchopen"); // 돋보기 아이콘

    minSrchOpen.addEventListener("click", e => {
    e.preventDefault();
    minSrchBox.classList.toggle("on");
    minSrchOpen.classList.toggle("on");
    });

    /* 모바일 / 태블릿 주메뉴 */
    const gnbAco = document.querySelectorAll("nav.min_gnb > ul > li.aco"); // li 4개

    for(let i = 0; i < gnbAco.length; i++) {
    gnbAco[i].addEventListener("click", e => {
        e.preventDefault();
        gnbAco.forEach(item => {
            if (item !== e.currentTarget) {
                item.classList.remove("on");
            }
        });
        e.currentTarget.classList.toggle("on");
    });
    };
});
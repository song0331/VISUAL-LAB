function Selector(eq){
  return document.querySelector(eq);
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 220) {
    Selector('nav').classList.add("fix");
    Selector('nav>ul>li:nth-of-type(1)>a').innerHTML = 'illustrator';
    Selector('nav>ul>li:nth-of-type(2)>a').innerHTML = 'Photoshop';
    Selector('nav>ul>li:nth-of-type(3)>a').innerHTML = 'Figma';
    Selector('nav>ul>li:nth-of-type(4)>a').innerHTML = 'Web';
    Selector('nav>ul>li:nth-of-type(5)>a').innerHTML = 'Premiere';
    Selector('nav>ul>li:nth-of-type(6)>a').innerHTML = 'After Effects';
  } else {
    Selector('nav').classList.remove("fix");
    Selector('nav>ul>li:nth-of-type(1)>a').innerHTML = 'illustrator 일러스트레이터';
    Selector('nav>ul>li:nth-of-type(2)>a').innerHTML = 'Photoshop 포토샵';
    Selector('nav>ul>li:nth-of-type(3)>a').innerHTML = 'Figma 피그마';
    Selector('nav>ul>li:nth-of-type(4)>a').innerHTML = 'Web 웹';
    Selector('nav>ul>li:nth-of-type(5)>a').innerHTML = 'Premiere 프리미어';
    Selector('nav>ul>li:nth-of-type(6)>a').innerHTML = 'After Effects 애프터 이펙트';
  }
});

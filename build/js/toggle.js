let nav=document.querySelector(".navigation"),navList=document.querySelector(".nav-js"),menu=document.querySelector(".toggle-js"),open=document.querySelector(".toggle"),close=document.querySelector(".toggle--close"),header=document.querySelector(".header-main");header.classList.contains("header-main--nojs")&&header.classList.remove("header-main--nojs"),menu.onclick=function(e){e.preventDefault(),menu.classList.contains("toggle")?(nav.classList.add("navigation--open"),navList.classList.add("navigation__list--open"),menu.classList.remove("toggle"),menu.classList.add("toggle--close")):(nav.classList.remove("navigation--open"),navList.classList.remove("navigation__list--open"),menu.classList.remove("toggle--close"),menu.classList.add("toggle"))};
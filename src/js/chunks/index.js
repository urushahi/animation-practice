//https://iamakulov.com/notes/optimize-images-webpack/ for image optimization

import $ from "jquery";
import elements from "./element";
//bootstrap imports
import "bootstrap/dist/js/bootstrap";

// datatable
import "datatables.net-buttons";
import "datatables.net-dt/css/jquery.dataTables.css";
import "lightgallery/dist/css/lightgallery.min.css";

import "lightgallery/dist/js/lightgallery-all";
import anime from 'animejs/lib/anime.es.js';

// import 'datatables.net-buttons-dt/css/buttons.dataTables.css'

//slick carousel
import "slick-carousel";
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");

//custom css
import "../../sass/main.scss";
const moment = require("moment");

import "bootstrap-datepicker";
import "bootstrap-datepicker/js/bootstrap-datepicker.js";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.standalone.min.css";


$(".rath").click(function () {

  anime({
    targets: '.wheel',
    rotate: "1turn",
    loop: 4,
    easing: 'easeInOutQuad',
    width: '100%',
  });
  // // anime({
  //   targets: '.name',
  //   transform:'center',
  //   rotate: "1turn",
  //   // loop: true,
  //   // backgroundColor: '#FFF',
  //   easing: 'easeInOutQuad'
  // });
  // anime({
  //   targets: '.rath',
  //   translateX: 250,
  //   loop: 4,
  //   direction: 'alternate',
  //   easing: 'easeInOutSine',
  //   width: '100%',
  // });
  anime({
    targets: '.rath',
    rotate: "1turn",
    loop: 4,
    easing: 'easeInOutQuad',
    width: '100%',
  });
})  

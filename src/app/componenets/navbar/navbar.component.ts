import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }  
  ngOnInit() {
    this.setHeader();
    this.initMenu();
    this.initHeaderSearch();
    $(window).on('resize', function() {
      var header = $('.header');
      if ($(window).scrollTop() > 100) {
          header.addClass('scrolled');
      } else {
          header.removeClass('scrolled');
      }
  });
  
  $(document).on('scroll', function() {
    var header = $('.header');
    if ($(window).scrollTop() > 100) {
        header.addClass('scrolled');
    } else {
        header.removeClass('scrolled');
    }
  });
  }


  //
   setHeader() {
    var header = $('.header');
    if ($(window).scrollTop() > 100) {
        header.addClass('scrolled');
    } else {
        header.removeClass('scrolled');
    }
}

/* 

3. Init Menu

*/

 initMenu() {
   var menuActive = false;
   var menu = $('.menu');
   var burger = $('.hamburger');
    if ($('.menu').length) {
        let menuu = $('.menu');
        if ($('.hamburger').length) {
           burger.on('click', function() {
                if (menuActive) {
                  menu.removeClass('active');
                  menuActive = false;
                } else {
                        menu.addClass('active');
                        menuActive = true;

                    $(document).one('click', function cls(e) {
                        if ($(e.target).hasClass('menu_mm')) {
                            $(document).one('click', cls);
                        } else {
                              menu.removeClass('active');
                              menuActive = false;
                        }
                    });
                }
            });
        }
    }
}
    /* 

    4. Init Header Search

    */

    initHeaderSearch() {
    if ($('.search_button').length) {
        $('.search_button').on('click', function() {
            if ($('.header_search_container').length) {
                $('.header_search_container').toggleClass('active');
            }
        });
    }
}

}

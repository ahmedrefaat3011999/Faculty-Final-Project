import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

    route: string;
    default : any;

    constructor(public sidebarservice: SidebarService, location: Location,public router: Router,private _AuthService:AuthService) {

        // router.events.subscribe((val) => {
        //     if(location.path() == '/dashboard/default'){
        //         $('body').removeAttr('class')
        //         this.default =true; 
        //         $('body').addClass( localStorage.getItem("them"));}   })
        //     } else {
        //         this.default =false;
        //         if(location.path() == '/users'){
        //             $('body').removeAttr('class')
        //             $('body').addClass('bg-theme bg-theme3')
        //             } else {
        //                 if(location.path() == '/dashboard/sales'){
        //                     $('body').removeAttr('class')
        //                     $('body').addClass('bg-theme bg-theme1')
        //                 } else{
        //                     if(location.path() == '/dashboard/analytics'){
        //                         $('body').removeAttr('class')
        //                         $('body').addClass('bg-theme bg-theme1')
        //                     } else {
        //                         if(location.path() == '/dashboard/alternate'){
        //                             $('body').removeAttr('class')
        //                             $('body').addClass('bg-theme bg-theme1')

        //                             }   else {
        //                                 if(location.path() == '/dashboard/digital-marketing'){
        //                                     $('body').removeAttr('class')
        //                                     $('body').addClass('bg-theme bg-theme1')

        //                                     } else {
        //                                             if(location.path() == '/dashboard/human-resources'){
        //                                                 $('body').removeAttr('class')
        //                                                 $('body').addClass('bg-theme bg-theme1')

        //                                             }

        //                                         }

        //                             }
        //                 }
        //             }
        //         }
        //     }
        //   });

     }
        
    toggleSidebar() {
        this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
    }
    
    getSideBarState() {
        return this.sidebarservice.getSidebarState();
    }

    hideSidebar() {
        this.sidebarservice.setSidebarState(true);
    }

    logOut(){
        this._AuthService.logOut()
    }
    ngOnInit() {
        // Subscribe to router events
        // this.router.events.subscribe(event => {
        //     if (event instanceof NavigationEnd) {  
        //         const themeClass = localStorage.getItem('them');
        //         if (themeClass) {
        //             $('body').removeClass().addClass(themeClass);
        //         }
        //     }
        // });
    
        /* Search Bar */
        $(".mobile-search-icon").on("click", function() {
            $(".search-bar").addClass("full-search-bar");
        });
        
        $(".search-close").on("click", function() {
            $(".search-bar").removeClass("full-search-bar");
        });
    
        // header color change on scroll
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 60) {
                $('.topbar').addClass('bg-dark');
            } else {
                $('.topbar').removeClass('bg-dark');
            }
        });
    }
}

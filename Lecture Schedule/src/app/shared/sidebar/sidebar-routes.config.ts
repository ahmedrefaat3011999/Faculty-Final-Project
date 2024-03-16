import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Teachers', icon: 'bi bi-house-door', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
         submenu: [
            { path: '/Teachers', title: 'Add Teachers', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Teachers/AllTeachers', title: 'All Teachers', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Lecture Schedules', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/LectureSchedules/AllSchedules', title: 'All Schedules', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/LectureSchedules', title: 'Add Schedules', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    
    {
        path: '', title: 'Exam Schedules', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/ExamSchedules/AllSchedules', title: 'All Exam Schedules', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/ExamSchedules', title: 'Add Exam Schedules', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    
    {
        path: '', title: 'Halls', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/Halls/AllHalls', title: 'All Halls', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/Halls', title: 'Add Halls', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Levels', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/levels/AddLevel', title: 'Add Level', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/levels', title: 'All levels', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    // {
    //     path: '', title: 'Blogs', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/blogs', title: 'All Blogs', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/blogs/addmainblog', title: 'Add Blog', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]},
    // {
    //     path: '', title: 'Freelancers', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/freelancers', title: 'All freelancers', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    // {
    //     path: '', title: 'Categories', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/Category', title: 'All Category', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/Category/addCategory', title: 'Add Categories', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    // {
    //     path: '', title: 'HomeBoxes', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/HomeBoxes', title: 'All HomeBoxes', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/HomeBoxes/AddHomeBox', title: 'Add HomeBox', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    // {
    //     path: '', title: 'Home Logo', icon: 'bi bi-grid', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
    //     submenu: [
    //         { path: '/HomeLogo', title: 'All HomeLogo', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //         { path: '/HomeLogo/AddHomeLogo', title: 'Add HomeLogo', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    //     ]
    // },
    { path: '', title: 'FQA', icon: 'bi bi-award', class: 'sub', badge: '', badgeClass: '', isExternalLink: false, 
    submenu: [
        { path: '/fqas', title: 'FQA', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },      
        { path: '/fqas/form', title: 'Add FQA', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },      
    ]}  
];
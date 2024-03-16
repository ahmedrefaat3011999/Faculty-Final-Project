import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'LectureSchedules',
    loadChildren: () =>
      import('../../Lecture Schedules/Schedules.module').then((m) => m.SchedulesModule),
  },
  {
    path: 'ExamSchedules',
    loadChildren: () =>
      import('../../Exam Schedules/Exam-Schedules.module').then((m) => m.ExamSchedulesModule),
  },
  {
    path: 'Halls',
    loadChildren: () =>
      import('../../halls/halls.module').then((m) => m.HallsModule),
  },
  {
    path: 'levels',
    loadChildren: () =>
      import('../../levels/levels.module').then((m) => m.LevelsModule),
  },

  {
    path: 'ng-components',
    loadChildren: () =>
      import('../../ng-components/ng-components.module').then(
        (m) => m.NgComponentsModule
      ),
  },

  {
    path: 'user-profile',
    loadChildren: () =>
      import('../../user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },

  {
    path: 'Teachers',
    loadChildren: () =>
      import('../../Teachers/Teachers.module').then((m) => m.TeacherModule),
  },
  // {
  //     path: 'blogs',
  //     loadChildren: () => import('../../Blogs/blogs.module').then(m => m.BlogsModule)
  // },
  // {
  //     path: 'UserServices',
  //     loadChildren: () => import('../../UserServices/Services.module').then(m => m.BlogsModule)
  // },
  {
    path: 'ticketSupport',
    loadChildren: () =>
      import('../../Ticket_Support/TicketSuport.module').then(
        (m) => m.ticketSupportModule
      ),
  },
  // {
  //     path: 'Category',
  //     loadChildren: () => import('../../Category/Category.module').then(m => m.CategoryModule)
  // },
  // {
  //     path: 'HomeBoxes',
  //     loadChildren: () => import('../../HomeBoxes/HomeBoxes.module').then(m => m.HomeBoxesModule)
  // },
  // {
  //     path: 'HomeLogo',
  //     loadChildren: () => import('../../HomeLogo/HomeLogo.module').then(m => m.HomeLogoModule)
  // },

  {
    path: 'fqas',
    loadChildren: () => import('../../fqa/fqa.module').then((m) => m.FqaModule),
  },
  // {
  //     path: 'error',
  //     loadChildren: () => import('./../../error/error.module').then(m => m.ErrorModule)
  // },
];

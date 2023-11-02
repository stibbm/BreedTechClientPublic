import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/account/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/account/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'stalls',
    loadChildren: () => import('./pages/stall/stalls/stalls.module').then(m => m.StallsPageModule)
  },
  {
    path: 'horses',
    loadChildren: () => import('./pages/horse/horses/horses.module').then(m => m.HorsesPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./pages/appointment/appointment/appointment.module').then(m => m.AppointmentPageModule)
  },
  {
    path: 'create-stall',
    loadChildren: () => import('./pages/stall/create-stall/create-stall.module').then(m => m.CreateStallPageModule)
  },
  {
    path: 'create-horse',
    loadChildren: () => import('./pages/horse/create-horse/create-horse.module').then(m => m.CreateHorsePageModule)
  },
  {
    path: 'move-horse',
    loadChildren: () => import('./pages/horse/move-horse/move-horse.module').then(m => m.MoveHorsePageModule)
  },
  {
    path: 'account-info',
    loadChildren: () => import('./pages/account/account-info/account-info.module').then(m => m.AccountInfoPageModule)
  },
  {
    path: 'create-appointment',
    loadChildren: () => import('./pages/appointment/create-appointment/create-appointment.module').then(m => m.CreateAppointmentPageModule)
  },
  {
    path: 'appointment-action',
    loadChildren: () => import('./pages/appointment/appointment-action/appointment-action.module').then(m => m.AppointmentActionPageModule)
  },
  {
    path: 'stallions',
    loadChildren: () => import('./pages/horse/stallions/stallions.module').then(m => m.StallionsPageModule)
  },
  {
    path: 'create-appointment-action',
    loadChildren: () => import('./pages/appointment/create-appointment-action/create-appointment-action.module').then(m => m.CreateAppointmentActionPageModule)
  },
  {
    path: 'create-semen-collection-log',
    loadChildren: () => import('./pages/horse/create-semen-collection-log/create-semen-collection-log.module').then(m => m.LogCollectionPageModule)
  },
  {
    path: 'create-charge',
    loadChildren: () => import('./pages/charge/create-charge/create-charge.module').then(m => m.CreateChargePageModule)
  },
  {
    path: 'semen-collection-log',
    loadChildren: () => import('./pages/horse/semen-collection-log/semen-collection-log.module').then(m => m.SemenCollectionLogPageModule)
  },
  {
    path: 'all-appointments-actions',
    loadChildren: () => import('./pages/appointment/all-appointments-actions/all-appointments-actions.module').then(m => m.AllAppointmentsActionsPageModule)
  },
  {
    path: 'appointment-action-type',
    loadChildren: () => import('./pages/appointment/appointment-action-type/appointment-action-type.module').then(m => m.AppointmentActionTypePageModule)
  },
  {
    path: 'create-appointment-action-type',
    loadChildren: () => import('./pages/appointment/create-appointment-action-type/create-appointment-action-type.module').then(m => m.CreateAppointmentActionTypePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/account/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./pages/account/create-user/create-user.module').then(m => m.CreateUserPageModule)
  },
  {
    path: 'horse-actions-history',
    loadChildren: () => import('./pages/horse/horse-actions-history/horse-actions-history.module').then(m => m.HorseActionsHistoryPageModule)
  },
  {
    path: 'user-charges-history',
    loadChildren: () => import('./pages/charge/user-charges-history/user-charges-history.module').then(m => m.UserChargesHistoryPageModule)
  },
  {
    path: 'move-horse-from-stalls-page',
    loadChildren: () => import('./pages/horse/move-horse-from-stalls-page/move-horse-from-stalls-page.module').then(m => m.MoveHorseFromStallsPagePageModule)
  },
  {
    path: 'upcoming-appointment-actions',
    loadChildren: () => import('./pages/appointment/upcoming-appointment-actions/upcoming-appointment-actions.module').then(m => m.UpcomingAppointmentActionsPageModule)
  },
  {
    path: 'horse-details',
    loadChildren: () => import('./pages/horse/horse-details/horse-details.module').then(m => m.HorseDetailsPageModule)
  },
  {
    path: 'create-stallion-contract',
    loadChildren: () => import('./pages/horse/create-stallion-contract/create-stallion-contract.module').then(m => m.CreateStallionContractPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then(m => m.EventsPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./pages/charge/create-event/create-event.module').then(m => m.CreateEventPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then(m => m.VideoPageModule)
  },
  {
    path: 'charges',
    loadChildren: () => import('./pages/charge/charges/charges.module').then(m => m.ChargesPageModule)
  },
  {
    path: 'stripe-payment',
    loadChildren: () => import('./pages/charge/stripe-payment/stripe-payment.module').then(m => m.StripePaymentPageModule)
  },
  {
    path: 'appointments-amount-due',
    loadChildren: () => import('./pages/appointment/appointments-amount-due/appointments-amount-due.module').then(m => m.AppointmentsAmountDuePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/charge/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'horse-cards',
    loadChildren: () => import('./pages/horse/horse-cards/horse-cards.module').then(m => m.HorseCardsPageModule)
  },
  {
    path: 'appointment-cards',
    loadChildren: () => import('./pages/appointment/appointment-cards/appointment-cards.module').then(m => m.AppointmentCardsPageModule)
  },
  {
    path: 'appointment-details',
    loadChildren: () => import('./pages/appointment/appointment-details/appointment-details.module').then(m => m.AppointmentDetailsPageModule)
  },
  {
    path: 'stall-details',
    loadChildren: () => import('./pages/stall/stall-details/stall-details.module').then(m => m.StallDetailsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/account/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/account/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'login-v2',
    loadChildren: () => import('./pages/account/login-v2/login-v2.module').then( m => m.LoginV2PageModule)
  },
  {
    path: 'appointment-actions',
    loadChildren: () => import('./pages/appointment/appointment-actions/appointment-actions.module').then( m => m.AppointmentActionsPageModule)
  },
  {
    path: 'appointment-action-types',
    loadChildren: () => import('./pages/appointment/appointment-action-types/appointment-action-types.module').then( m => m.AppointmentActionTypesPageModule)
  },
  {
    path: 'horse-cards-test',
    loadChildren: () => import('./pages/horse/horse-cards-test/horse-cards-test.module').then(m => m.HorseCardsTestPageModule)
  },
  {
    path: 'login-v3',
    loadChildren: () => import('./pages/account/login-v3/login-v3.module').then( m => m.LoginV3PageModule)
  },
  {
    path: 'horse-cards2',
    loadChildren: () => import('./pages/horse/horse-cards2/horse-cards2.module').then(m => m.HorseCards2PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

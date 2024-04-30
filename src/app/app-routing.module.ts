import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule ), 
    canActivate :[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate :[NologinGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate :[NologinGuard]
  },
  {
    path: 'reset-pass',
    loadChildren: () => import('./pages/reset-pass/reset-pass.module').then( m => m.ResetPassPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'alimentacion',
    loadChildren: () => import('./pages/alimentacion/alimentacion.module').then( m => m.AlimentacionPageModule)
  },
  {
    path: 'habitos',
    loadChildren: () => import('./pages/habitos/habitos.module').then( m => m.HabitosPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then( m => m.ActividadPageModule)
  },
  {
    path: 'toxico',
    loadChildren: () => import('./pages/toxico/toxico.module').then( m => m.ToxicoPageModule)
  },
  {
    path: 'prevencioncuello',
    loadChildren: () => import('./pages/prevencioncuello/prevencioncuello.module').then( m => m.PrevencioncuelloPageModule)
  },
  {
    path: 'deteccionmama',
    loadChildren: () => import('./pages/deteccionmama/deteccionmama.module').then( m => m.DeteccionmamaPageModule)
  },
  {
    path: 'diario',
    loadChildren: () => import('./pages/diario/diario.module').then( m => m.DiarioPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'information2',
    loadChildren: () => import('./pages/information2/information2.module').then( m => m.Information2PageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./pages/salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'hometrivia',
    loadChildren: () => import('./pages/hometrivia/hometrivia.module').then( m => m.HometriviaPageModule)
  },
  {
    path: 'game-view',
    loadChildren: () => import('./pages/game-view/game-view.module').then( m => m.GameViewPageModule)
  },
  {
    path: 'feedback/:true/:correctAnswer/:Explanation/:totalQuizNum/:Url_image',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },

  
 
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

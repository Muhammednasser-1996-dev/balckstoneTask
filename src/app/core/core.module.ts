import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UiModuleModule } from '../shared/ui-module/ui-module.module';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { HttpInterceptorService } from './interceptors/guest-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, HeaderDashboardComponent],
  imports: [CommonModule, SharedModule, RouterModule, UiModuleModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}

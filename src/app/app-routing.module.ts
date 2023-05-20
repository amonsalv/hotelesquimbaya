import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; //vamos a enrutar desde componentes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

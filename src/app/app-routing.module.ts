import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { RegisterBookComponent } from './components/register-book/register-book.component'

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterBookComponent },
  { path: "register/:id", component: RegisterBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

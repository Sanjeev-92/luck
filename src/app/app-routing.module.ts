import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*----list your component here ---*/
import { LuckBasedGameComponent } from 'src/components/luck-based-game/luck-based-game.component';



const routes: Routes = [
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: 'game', component:LuckBasedGameComponent, pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

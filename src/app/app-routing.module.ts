import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LightsPuzzlePage } from "./pages";

const routes: Routes = [{ path: "**", component: LightsPuzzlePage }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

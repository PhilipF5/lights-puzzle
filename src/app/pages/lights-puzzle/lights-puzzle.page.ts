import { Component, ViewChild } from "@angular/core";
import { LightsGridComponent } from "app/components";

@Component({
	selector: "lights-puzzle-page",
	templateUrl: "./lights-puzzle.page.html",
	styleUrls: ["./lights-puzzle.page.scss"],
})
export class LightsPuzzlePage {
	@ViewChild(LightsGridComponent)
	public grid: LightsGridComponent;

	public get gridSolved() {
		return this.grid.isSolved;
	}

	public onReset() {
		this.grid.reset();
	}
}

import { Component, ViewChild } from "@angular/core";
import { LightsGridComponent } from "app/components";
import { environment } from "environments/environment";

@Component({
	selector: "lights-puzzle-page",
	templateUrl: "./lights-puzzle.page.html",
	styleUrls: ["./lights-puzzle.page.scss"],
})
export class LightsPuzzlePage {
	public difficulty: (3 | 6) = 3;
	@ViewChild(LightsGridComponent) public grid: LightsGridComponent;
	public version = environment.VERSION;

	public get gridSolved() {
		return this.grid.isSolved;
	}

	public get switchText(): string {
		return "Switch to " + (this.difficulty === 3 ? "Hard" : "Easy");
	}

	public onReset() {
		this.grid.reset();
	}

	public switchDifficulty() {
		this.difficulty = this.difficulty === 3 ? 6 : 3;
	}
}

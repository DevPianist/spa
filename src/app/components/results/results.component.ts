import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HeroesService } from "src/app/services/heroes.service";
@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  constructor(
    private _heroesService: HeroesService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
  results: any = [];
  termino: string;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      console.log("busqueda" + params["t"]);
      this.results = this._heroesService.buscarHeroe(params["t"]);
      this.termino = params["t"];
      console.log(this.results.length);
    });
  }
  verHeroe(id: number) {
    console.log(id);
    this._router.navigate(["/heroe", id]); //router mediante funciones en button
  }
}

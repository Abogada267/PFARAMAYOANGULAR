import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-cursos-detail",
    templateUrl: "./cursos-detail.component.html",
    styleUrls: ["./cursos-detail.component.scss"]
})
export class CursosDetailComponent implements OnInit {

    cursos: string = "";

    constructor(private _route: ActivatedRoute) { }
    
    ngOnInit(): void {
        this._route.params.subscribe(params => {
            this.cursos = params["cursosId"]; 
        });
    }
}



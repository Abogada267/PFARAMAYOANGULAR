import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReduxComponent } from "./redux.component";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: "redux",
                component: ReduxComponent,
            },
        ]),
    ],
})
    
export class ReduxModule {}
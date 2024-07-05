import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { CardComponent } from "./shared/card/card.component";
import { FormsModule } from "@angular/forms";
import { TaskComponent } from "./task-list/task/task.component";
import { TaskCreatorComponent } from "./task-list/task-creator/task-creator.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent,
        HeaderComponent, 
        UserComponent,
        TaskListComponent,
        TaskComponent,
        TaskListComponent,
        TaskCreatorComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,
        FormsModule,
        SharedModule
    ]
})
export class AppModule {

}
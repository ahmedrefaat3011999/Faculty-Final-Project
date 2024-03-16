import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { add_ReplyComponent } from "./add_Reply/add_Reply.component";
import { AllComplaintsComponent } from "./all-complaints/all-complaints.component";
import { ComlaintDetailsComponent } from "./comlaint-details/comlaint-details.component";
import { following_add_ReplyComponent } from "./following_add_Reply/following_add_Reply.component";


const routes: Routes = [
  {
    path: "",
    runGuardsAndResolvers: "always",
    component:AllComplaintsComponent,
  },
  {
    path: "all_comlaints",
    runGuardsAndResolvers: "always",
    component:AllComplaintsComponent,
  },
  {
    path: "comlaint_details/:id",
    runGuardsAndResolvers: "always",
    component:ComlaintDetailsComponent,
  },
  {
    path: "Add_Replies/:id",
    runGuardsAndResolvers: "always",
    component:add_ReplyComponent,
  },
  {
    path: "follow_Add_Replies/:id",
    runGuardsAndResolvers: "always",
    component:following_add_ReplyComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ticketSupportRoutingModule {

}

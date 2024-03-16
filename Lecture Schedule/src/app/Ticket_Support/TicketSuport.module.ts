import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { add_ReplyComponent } from './add_Reply/add_Reply.component';
import { ticketSupportRoutingModule } from './TicketSupport-routing.module';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';
import { ComlaintDetailsComponent } from './comlaint-details/comlaint-details.component';
import { following_add_ReplyComponent } from './following_add_Reply/following_add_Reply.component';

@NgModule({
  declarations: [
    add_ReplyComponent,
    AllComplaintsComponent,
    ComlaintDetailsComponent,
    following_add_ReplyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    FormsModule,
    ticketSupportRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class ticketSupportModule {}

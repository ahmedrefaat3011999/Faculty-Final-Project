import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
//import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-all-fqa',
  templateUrl: './all-fqa.component.html',
  styleUrls: ['./all-fqa.component.scss']
})
export class AllFqaComponent implements OnInit {

  allFQA:any[]=[]
  constructor(private _HttpService : HttpService) {
    // $(document).ready(function () {
    //   $('#dtBasicExample').DataTable();
    //   $('.dataTables_length').addClass('bs-select');
    // });
   }

  GetAllFQA(){
    this._HttpService.GET(`Admin/GetAllFQA`).subscribe({
      next:(res)=>{
        this.allFQA = res
        if (res==null) {
          this.allFQA = []
        }
        console.log(res);
      }
    })
    
  
  }
 

  onClick(element, element2, element3) {
    console.log(element.classList);
    if(element.classList.value.includes('active')){
      element.classList.remove('active');
    }

    console.log(element2.classList);

    if(element2.classList.value.includes('not-collapsed') === false){
      element2.classList.add('collapsed');
      element2.classList.add('not-collapsed');
      element2.classList.remove('button-collapsed');
      element2.setAttribute('aria-expanded','false')
    }
    else {
      console.log(element2.classList);
      element2.classList.remove('collapsed');
      element2.classList.remove('not-collapsed');
      element2.classList.add('button-collapsed');
      element2.setAttribute('aria-expanded','true')
    }

    if(element3.classList.value.includes('hide') === false){
      element3.classList.add('hide');
      console.log(element3.classList)
    }
    else {
      element3.classList.remove('hide');
    }
  }

  
  deleteFQA(fqaId){
    this.allFQA = this.allFQA.filter((b)=>b.fqaId!=fqaId);
this._HttpService.DELETE(`Admin/${fqaId}/DeleteFQA`).subscribe({
  next:(res)=>{
    console.log(res);   

  }
})

   
  }

  first: boolean;
  second: boolean;
  third: boolean;
  four: boolean;
  ngOnInit(): void {
    this.first = true;
    this.second = false;
    this.third = false;
    this.four = false;
    this.GetAllFQA()  
   
  }

  

}

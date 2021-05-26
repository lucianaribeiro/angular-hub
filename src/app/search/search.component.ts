import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm = this.formBuilder.group({
    search: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchForm.value);
  } 

}

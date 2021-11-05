import { Component, Input, OnInit } from '@angular/core';
import { DataService, SampleData } from '../../services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  @Input() address: string = '';

  sampleData: SampleData[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData(this.address).subscribe(data => {
      this.sampleData = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService, SampleData } from '../../services/data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  sampleData: SampleData[] = [];

  constructor(private dataService: DataService) {
    dataService.getData().subscribe(data => {
      this.sampleData = data;
    })
  }

  ngOnInit(): void {
  }

}

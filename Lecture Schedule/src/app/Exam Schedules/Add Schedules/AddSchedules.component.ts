import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-AddSchedules',
  templateUrl: './AddSchedules.component.html',
  styleUrls: ['./AddSchedules.component.scss'],
})
export class AddSchedulesComponent implements OnInit {
  constructor(private httpserv: HttpService) {}

  ngOnInit(): void {}
  teachers: any[] = [
    { name: 'Teacher 1' },
    { name: 'Teacher 2' },
    { name: 'Teacher 3' },
    { name: 'Teacher 4' },
    { name: 'Teacher 5' },
  ];
  halls: string[] = ['Hall 1', 'Hall 2', 'Hall 3', 'Hall 4', 'Hall 5'];
  lectureSchedules: any[] = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
  ];

  onDragStart(event: DragEvent, item: any, index: number) {
    event.dataTransfer!.setData('text/plain', JSON.stringify({ item, index }));
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent, dayIndex: number) {
    event.preventDefault();
    const data = event.dataTransfer!.getData('text/plain');
    const { item, index } = JSON.parse(data);
    if (dayIndex === -1) {
      // Drop on Teachers card
      this.lectureSchedules.forEach((row) => {
        if (!row[index]) {
          row[index] = item.name || item;
          return;
        }
      });
      this.teachers.splice(index, 1);
    } else if (dayIndex === -2) {
      // Drop on Halls card
      this.lectureSchedules.forEach((row) => {
        if (!row.includes(item)) {
          row[dayIndex] = item;
          return;
        }
      });
      this.halls.splice(index, 1);
    } else {
      // Drop on a specific day in the table
      this.lectureSchedules[dayIndex][index] = item.name || item;
    }
  }
  addEventListenersToCells() {
    const tableCells = document.querySelectorAll('tbody td');
    console.log('All td' + tableCells.length);
    tableCells.forEach((cell) => {
      if (cell instanceof Element) {
        // Filter out non-element nodes
        cell.addEventListener('click', (event) => {
          // Get the day index from the clicked cell's parent cell index
          const dayIndex = (cell as HTMLTableCellElement).cellIndex - 1;
          // Get the time from the corresponding table header
          const timeIndex = Array.from(
            cell.parentNode.parentNode.querySelectorAll('th:not(:first-child)')
          ).indexOf(cell);

          // Get the time inputs from the first cell
          const timeInputs = cell.parentNode.querySelectorAll(
            'input[type="number"]'
          );
          const startTime = (timeInputs[0] as HTMLInputElement)?.value;
          const endTime = (timeInputs[1] as HTMLInputElement)?.value;

          // Extract the data from the clicked cell
          const teacher = cell.textContent.trim();
          const hall = cell.getAttribute('data-hall'); // Assuming you set the hall data using JavaScript

          // Use the extracted data as needed
          console.log(
            `Day: ${dayIndex}, Time: ${startTime} - ${endTime}, Teacher: ${teacher}, Hall: ${hall}`
          );
        });
      }
    });
  }
}

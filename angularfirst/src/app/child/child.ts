import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
  standalone: true
})
export class Child implements OnChanges{
  @Input('random') value = ""
  @Input() value2 = ""


  @Output() statusEmitter : EventEmitter<boolean> = new EventEmitter<boolean>();

  sayHello() {
    console.log('hello from child')
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.value);
    console.log(changes, "onChange");
  }

  emitStatus() {
    this.statusEmitter.emit(true)
  }
}

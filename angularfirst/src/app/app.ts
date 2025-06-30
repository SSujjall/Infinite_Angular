import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  protected title = 'angularfirst';
  isActive = true;
  isError = true;
  textDecoration = 'overline';
  marginTop = '20px';

  @ViewChild(Child) child!: Child;

  // unmount huda call hunxa: eg home component xa and navbar ma arko link thichda arko component kholxa and previous component unmount hunxa (destroy hunxa)
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    console.log('view load vayepaxi kei call garnu xa vaye')

    console.log(this.child);
    this.child.sayHello();
  }

  ngOnInit(): void {
    console.log('Hello from app componenet');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('k changes ho tyo anusar call garna ko lagi')
  }

  hello() {
    this.isActive = false;
  }

  handleEmittedStatus(status: boolean) {
    console.log(status)
  }


  observable = new Observable(this.observerFunction)

  observerFunction(observer: Subscriber<unknown>) {
    observer.next(1)
    observer.next(2)
    observer.next(3)
  }

  observable2 = new Observable((observer) => {
    observer.next(1)
    observer.next(2)
  })

  observable3 = new Observable<number[]>((observer) => {
    observer.next([1,2,3,4])
  })

  constructor() {
    console.log("hello");
    this.observable.subscribe()

    this.observable2.pipe(
      map(val => val)
    ).subscribe((data) => {
      console.log(data)
    })


    this.observable3.pipe(
      map(x => x.map(y => y*2))
    ).subscribe((data) => {
      console.log(data)
    })
  }
}

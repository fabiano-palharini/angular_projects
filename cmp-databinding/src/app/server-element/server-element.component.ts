import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element : {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
}

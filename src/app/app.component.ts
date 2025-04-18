import {Component, ElementRef, inject, OnInit, Renderer2, viewChild} from '@angular/core';
import {COLORS} from './utils/colors';
import {fromPromise} from 'rxjs/internal/observable/innerFrom';
import {BehaviorSubject, catchError, map, Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  selectedColor = viewChild<ElementRef<HTMLDivElement>>('selectedColorRef');
  render2 = inject(Renderer2);

  title = 'angular-web-extension';
  colors: string[] = COLORS;
  colorSelected: Observable<string> = new BehaviorSubject<string>('white');

  ngOnInit(): void {
    this.colorSelected = fromPromise(chrome.storage.local.get('selectedColor'))
      .pipe(map(value => value['selectedColor']), catchError(() => 'red'));
  }


  selectColor(color: string): void {
    this.render2.setStyle(this.selectedColor()?.nativeElement, 'background-color', color);
    chrome.runtime.sendMessage({action: 'colorSelected', color});
  }
}

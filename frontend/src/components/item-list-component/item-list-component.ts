import { Component, Input } from '@angular/core';
import { MovieListItem } from '../../models/user.model';


@Component({
  selector: 'app-item-list-component',
  imports: [],
  templateUrl: './item-list-component.html',
  styleUrl: './item-list-component.css',
})
export class ItemListComponent {

  @Input({required: true}) title!: string;
  @Input({required: true}) items!: MovieListItem[];
  @Input({required: true}) stars!: number[];

  @Input({required: false}) subtitle: string = '';
}
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit  {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  ngOnInit(): void {}

  saveItem(description: any) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}

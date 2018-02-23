import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})

export class HeaderComponent{

    @Output() headerItemClickEvent = new EventEmitter<string>();

    onHeaderItemClicked(eventParameter: string){
        this.headerItemClickEvent.emit(eventParameter);
    }
}
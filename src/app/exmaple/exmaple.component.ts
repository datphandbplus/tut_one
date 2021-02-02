import { Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: "app-exmaple",
  template: `
    <h1>CSS vars works!</h1>
  `,
  styles: [
    `
      :host {
        color: var(--color);
      }
    `
  ]
})
export class ExmapleComponent {
  @HostBinding("style.--color")
  @Input()
  color: string;
}

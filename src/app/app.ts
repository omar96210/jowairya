import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jowairya');
  protected readonly phoneNumber = '01090994386';
  protected readonly phoneCopied = signal(false);

  protected async copyPhoneNumber(): Promise<void> {
    await navigator.clipboard.writeText(this.phoneNumber);
    this.phoneCopied.set(true);
  }



    protected readonly titleInsta = signal('jowairya');
  protected readonly phoneNumberInsta = '01113044080';
  protected readonly phoneCopiedInsta = signal(false);

  protected async copyPhoneNumberInsta(): Promise<void> {
    await navigator.clipboard.writeText(this.phoneNumberInsta);
    this.phoneCopiedInsta.set(true);
  }
  
}

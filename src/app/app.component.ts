import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent = new EmailEditorComponent;
  
  editorLoaded(event: any) {
    console.log(event)
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data: any) => console.log('exportHtml', data));
  }
}
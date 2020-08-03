import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Importação dos ícones utilizando iconRegistry
  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon('coffee', sanitizer.bypassSecurityTrustResourceUrl('assets/img/coffee.svg'));
    iconRegistry.addSvgIcon('fb', sanitizer.bypassSecurityTrustResourceUrl('assets/img/fb.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/img/github.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/img/linkedin.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/img/twitter.svg'));
  }

  ngOnInit(): void {
  }
}

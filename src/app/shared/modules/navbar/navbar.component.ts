import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showDelay = new FormControl(400);
  hideDelay = new FormControl(500);

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router: Router
  ) {
    iconRegistry.addSvgIcon('bus', sanitizer.bypassSecurityTrustResourceUrl('assets/img/bus.svg'));
    iconRegistry.addSvgIcon('theme-light', sanitizer.bypassSecurityTrustResourceUrl('assets/img/theme-light.svg'));
  }

  ngOnInit(): void {
  }

  handleMinibus() {
    this.router.navigate(['linha-lotacao']);
  }

  handleBus() {
    this.router.navigate(['linha-onibus']);
  }
}

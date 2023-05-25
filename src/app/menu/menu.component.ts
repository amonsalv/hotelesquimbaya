import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent { public scrolled: boolean = false;

  constructor(private renderer: Renderer2) { }

  @HostListener ('window:scroll')
  onWindowScroll() {
    // Lógica para cambiar el estilo del menú

    const elemento = document.getElementById('menu')
    if (window.pageYOffset > 0) {
      this.scrolled = true;
      console.log(elemento)
      this.renderer.addClass(elemento, 'menu2');
      this.renderer.removeClass(elemento, 'menu');
    } else {
      this.scrolled = false;
      console.log(elemento)
      this.renderer.removeClass(elemento, 'menu2');
      this.renderer.addClass(elemento, 'menu');
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    // Se vuelve a verificar el estado del scroll cuando se cambia el tamaño de la ventana
    this.onWindowScroll();
  }


}
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef, //Objeto que da acesso ao elemento da DOM
    private renderer: Renderer2 //Serviço que fornece abstração para manipular redenrização(Manipulação de elementos)
  ) {  }
  //Pegando o elemento nativo do html

  //Anotação para indicar o ganho de foc0 com o focos
  @HostListener('focus') QuandoDerFoco(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  //Anotação para indicar a perda de foc0 com o blur
  @HostListener('blur') aoPerderFoco(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}

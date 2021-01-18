import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  //Fazendo um vinculo
  @HostBinding('style.backgroundColor') corDeFundo: string;
  @Input() cor = 'gray';

  constructor() {  }
  //Pegando o elemento nativo do html

  //Anotação para indicar o ganho de foc0 com o focos
  @HostListener('focus') colorir(){
    this.corDeFundo = this.cor;
  }

  //Anotação para indicar a perda de foc0 com o blur
  @HostListener('blur') descolorir(){
    this.corDeFundo = 'transparent';
  }

}

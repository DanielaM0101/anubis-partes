import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AnubisPartesComponent } from './anubis-partes/anubis-partes.component';
import { AnatomiaComponent } from './anubis-partes/anatomia/anatomia.component';
import { CabezaComponent } from './anubis-partes/cabeza/cabeza.component';
import { CerebroComponent } from './anubis-partes/cabeza/cerebro/cerebro.component';
import { BrazosComponent } from './anubis-partes/brazos/brazos.component';
import { BrazosanatoComponent } from './anubis-partes/brazos/brazosanato/brazosanato.component';
import { TorsoComponent } from './anubis-partes/torso/torso.component';
import { TorsoanatoComponent } from './anubis-partes/torso/torsoanato/torsoanato.component';
import { PiernasComponent } from './anubis-partes/piernas/piernas.component';
import { PiernasanatoComponent } from './anubis-partes/piernas/piernasanato/piernasanato.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AnubisPartesComponent, AnatomiaComponent, CabezaComponent, CerebroComponent, BrazosComponent, BrazosanatoComponent, TorsoComponent, TorsoanatoComponent, PiernasComponent, PiernasanatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anubis-partes';
}

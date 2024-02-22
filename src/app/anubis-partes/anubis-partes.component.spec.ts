import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnubisPartesComponent } from './anubis-partes.component';

describe('AnubisPartesComponent', () => {
  let component: AnubisPartesComponent;
  let fixture: ComponentFixture<AnubisPartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnubisPartesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnubisPartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

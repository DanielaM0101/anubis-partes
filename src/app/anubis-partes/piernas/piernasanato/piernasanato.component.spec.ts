import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiernasanatoComponent } from './piernasanato.component';

describe('PiernasanatoComponent', () => {
  let component: PiernasanatoComponent;
  let fixture: ComponentFixture<PiernasanatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiernasanatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiernasanatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

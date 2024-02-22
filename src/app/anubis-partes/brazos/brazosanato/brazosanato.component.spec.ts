import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazosanatoComponent } from './brazosanato.component';

describe('BrazosanatoComponent', () => {
  let component: BrazosanatoComponent;
  let fixture: ComponentFixture<BrazosanatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrazosanatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrazosanatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

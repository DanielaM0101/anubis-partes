import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazosComponent } from './brazos.component';

describe('BrazosComponent', () => {
  let component: BrazosComponent;
  let fixture: ComponentFixture<BrazosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrazosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrazosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

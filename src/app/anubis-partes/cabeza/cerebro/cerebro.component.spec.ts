import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerebroComponent } from './cerebro.component';

describe('CerebroComponent', () => {
  let component: CerebroComponent;
  let fixture: ComponentFixture<CerebroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerebroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CerebroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

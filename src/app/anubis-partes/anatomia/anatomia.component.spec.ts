import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnatomiaComponent } from './anatomia.component';

describe('AnatomiaComponent', () => {
  let component: AnatomiaComponent;
  let fixture: ComponentFixture<AnatomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnatomiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnatomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

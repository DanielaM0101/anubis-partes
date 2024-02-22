import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorsoanatoComponent } from './torsoanato.component';

describe('TorsoanatoComponent', () => {
  let component: TorsoanatoComponent;
  let fixture: ComponentFixture<TorsoanatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorsoanatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorsoanatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

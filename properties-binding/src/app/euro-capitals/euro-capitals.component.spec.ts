import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroCapitalsComponent } from './euro-capitals.component';

describe('EuroCapitalsComponent', () => {
  let component: EuroCapitalsComponent;
  let fixture: ComponentFixture<EuroCapitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroCapitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemalePageComponent } from './female-page.component';

describe('FemalePageComponent', () => {
  let component: FemalePageComponent;
  let fixture: ComponentFixture<FemalePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemalePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

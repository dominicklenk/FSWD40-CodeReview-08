import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalePageComponent } from './male-page.component';

describe('MalePageComponent', () => {
  let component: MalePageComponent;
  let fixture: ComponentFixture<MalePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastriesComponent } from './pastries.component';

describe('PastriesComponent', () => {
  let component: PastriesComponent;
  let fixture: ComponentFixture<PastriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastriesComponent]
    });
    fixture = TestBed.createComponent(PastriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

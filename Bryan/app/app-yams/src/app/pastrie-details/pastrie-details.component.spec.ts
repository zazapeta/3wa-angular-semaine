import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieDetailsComponent } from './pastrie-details.component';

describe('PastrieDetailsComponent', () => {
  let component: PastrieDetailsComponent;
  let fixture: ComponentFixture<PastrieDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastrieDetailsComponent]
    });
    fixture = TestBed.createComponent(PastrieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnfComponent } from './fnf.component';

describe('FnfComponent', () => {
  let component: FnfComponent;
  let fixture: ComponentFixture<FnfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

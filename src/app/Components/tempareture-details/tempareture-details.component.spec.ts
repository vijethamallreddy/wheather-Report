import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemparetureDetailsComponent } from './tempareture-details.component';

describe('TemparetureDetailsComponent', () => {
  let component: TemparetureDetailsComponent;
  let fixture: ComponentFixture<TemparetureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemparetureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemparetureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

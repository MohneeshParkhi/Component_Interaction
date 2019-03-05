import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewInitComponent } from './parent-view-init.component';

describe('ParentViewInitComponent', () => {
  let component: ParentViewInitComponent;
  let fixture: ComponentFixture<ParentViewInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentViewInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

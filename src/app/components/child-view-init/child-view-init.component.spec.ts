import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewInitComponent } from './child-view-init.component';

describe('ChildViewInitComponent', () => {
  let component: ChildViewInitComponent;
  let fixture: ComponentFixture<ChildViewInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyViewchildComponent } from './my-viewchild.component';

describe('MyViewchildComponent', () => {
  let component: MyViewchildComponent;
  let fixture: ComponentFixture<MyViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

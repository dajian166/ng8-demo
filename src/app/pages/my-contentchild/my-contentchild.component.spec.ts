import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContentchildComponent } from './my-contentchild.component';

describe('MyContentchildComponent', () => {
  let component: MyContentchildComponent;
  let fixture: ComponentFixture<MyContentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyContentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

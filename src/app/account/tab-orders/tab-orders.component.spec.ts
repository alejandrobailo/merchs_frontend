import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOrdersComponent } from './tab-orders.component';

describe('TabOrdersComponent', () => {
  let component: TabOrdersComponent;
  let fixture: ComponentFixture<TabOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

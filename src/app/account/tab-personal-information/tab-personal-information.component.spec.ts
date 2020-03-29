import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPersonalInformationComponent } from './tab-personal-information.component';

describe('TabPersonalInformationComponent', () => {
  let component: TabPersonalInformationComponent;
  let fixture: ComponentFixture<TabPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

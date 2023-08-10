import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLinkComponent } from './child-link.component';

describe('ChildLinkComponent', () => {
  let component: ChildLinkComponent;
  let fixture: ComponentFixture<ChildLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

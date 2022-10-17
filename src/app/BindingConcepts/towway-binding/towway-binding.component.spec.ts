import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowwayBindingComponent } from './towway-binding.component';

describe('TowwayBindingComponent', () => {
  let component: TowwayBindingComponent;
  let fixture: ComponentFixture<TowwayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowwayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowwayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

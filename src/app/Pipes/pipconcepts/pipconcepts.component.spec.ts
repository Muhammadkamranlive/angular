import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipconceptsComponent } from './pipconcepts.component';

describe('PipconceptsComponent', () => {
  let component: PipconceptsComponent;
  let fixture: ComponentFixture<PipconceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipconceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

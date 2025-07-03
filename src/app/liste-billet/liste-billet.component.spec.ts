import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBilletComponent } from './liste-billet.component';

describe('ListeBilletComponent', () => {
  let component: ListeBilletComponent;
  let fixture: ComponentFixture<ListeBilletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeBilletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvolComponent } from './listvol.component';

describe('ListvolComponent', () => {
  let component: ListvolComponent;
  let fixture: ComponentFixture<ListvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListvolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

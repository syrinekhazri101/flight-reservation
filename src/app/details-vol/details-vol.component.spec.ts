import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVolComponent } from './details-vol.component';

describe('DetailsVolComponent', () => {
  let component: DetailsVolComponent;
  let fixture: ComponentFixture<DetailsVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsVolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

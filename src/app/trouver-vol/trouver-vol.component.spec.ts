import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverVolComponent } from './trouver-vol.component';

describe('TrouverVolComponent', () => {
  let component: TrouverVolComponent;
  let fixture: ComponentFixture<TrouverVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouverVolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

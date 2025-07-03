import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatBilletComponent } from './achat-billet.component';

describe('AchatBilletComponent', () => {
  let component: AchatBilletComponent;
  let fixture: ComponentFixture<AchatBilletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatBilletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

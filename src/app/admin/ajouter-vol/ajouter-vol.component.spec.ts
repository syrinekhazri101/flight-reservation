import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVolComponent } from './ajouter-vol.component';

describe('AjouterVolComponent', () => {
  let component: AjouterVolComponent;
  let fixture: ComponentFixture<AjouterVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterVolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

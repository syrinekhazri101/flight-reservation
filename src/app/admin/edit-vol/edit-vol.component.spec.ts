import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVolComponent } from './edit-vol.component';

describe('EditVolComponent', () => {
  let component: EditVolComponent;
  let fixture: ComponentFixture<EditVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

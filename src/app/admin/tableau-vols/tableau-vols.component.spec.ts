import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauVolsComponent } from './tableau-vols.component';

describe('TableauVolsComponent', () => {
  let component: TableauVolsComponent;
  let fixture: ComponentFixture<TableauVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauVolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmComponent } from './update-em.component';

describe('UpdateEmComponent', () => {
  let component: UpdateEmComponent;
  let fixture: ComponentFixture<UpdateEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

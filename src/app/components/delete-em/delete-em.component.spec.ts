import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmComponent } from './delete-em.component';

describe('DeleteEmComponent', () => {
  let component: DeleteEmComponent;
  let fixture: ComponentFixture<DeleteEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

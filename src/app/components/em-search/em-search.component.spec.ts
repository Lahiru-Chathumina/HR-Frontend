import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmSearchComponent } from './em-search.component';

describe('EmSearchComponent', () => {
  let component: EmSearchComponent;
  let fixture: ComponentFixture<EmSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmComponent } from './search-em.component';

describe('SearchEmComponent', () => {
  let component: SearchEmComponent;
  let fixture: ComponentFixture<SearchEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditDetailsComponent } from './product-edit-details.component';

describe('ProductEditDetailsComponent', () => {
  let component: ProductEditDetailsComponent;
  let fixture: ComponentFixture<ProductEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

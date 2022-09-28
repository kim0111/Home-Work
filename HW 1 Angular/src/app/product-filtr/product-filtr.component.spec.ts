import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFiltrComponent } from './product-filtr.component';

describe('ProductFiltrComponent', () => {
  let component: ProductFiltrComponent;
  let fixture: ComponentFixture<ProductFiltrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFiltrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFiltrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

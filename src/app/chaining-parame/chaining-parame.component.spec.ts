import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainingParameComponent } from './chaining-parame.component';

describe('ChainingParameComponent', () => {
  let component: ChainingParameComponent;
  let fixture: ComponentFixture<ChainingParameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainingParameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainingParameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

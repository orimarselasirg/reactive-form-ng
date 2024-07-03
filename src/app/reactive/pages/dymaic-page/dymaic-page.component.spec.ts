import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DymaicPageComponent } from './dymaic-page.component';

describe('DymaicPageComponent', () => {
  let component: DymaicPageComponent;
  let fixture: ComponentFixture<DymaicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DymaicPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DymaicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

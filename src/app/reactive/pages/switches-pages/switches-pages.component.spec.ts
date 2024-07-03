import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesPagesComponent } from './switches-pages.component';

describe('SwitchesPagesComponent', () => {
  let component: SwitchesPagesComponent;
  let fixture: ComponentFixture<SwitchesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchesPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

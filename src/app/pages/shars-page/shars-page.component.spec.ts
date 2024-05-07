import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharsPageComponent } from './shars-page.component';

describe('SharsPageComponent', () => {
  let component: SharsPageComponent;
  let fixture: ComponentFixture<SharsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

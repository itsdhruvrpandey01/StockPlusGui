import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinUpPageComponent } from './sin-up-page.component';

describe('SinUpPageComponent', () => {
  let component: SinUpPageComponent;
  let fixture: ComponentFixture<SinUpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinUpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

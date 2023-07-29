import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfootComponent } from './myfoot.component';

describe('MyfootComponent', () => {
  let component: MyfootComponent;
  let fixture: ComponentFixture<MyfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

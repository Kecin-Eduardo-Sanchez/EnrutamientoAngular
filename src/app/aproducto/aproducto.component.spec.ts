import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProductoComponent } from './aproducto.component';

describe('AProductoComponent', () => {
  let component: AProductoComponent;
  let fixture: ComponentFixture<AProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierComponent } from './premier.component';

describe('PremierComponent', () => {
  let component: PremierComponent;
  let fixture: ComponentFixture<PremierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

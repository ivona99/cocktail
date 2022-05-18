import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholicComponent } from './alcoholic.component';

describe('AlcoholicComponent', () => {
  let component: AlcoholicComponent;
  let fixture: ComponentFixture<AlcoholicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

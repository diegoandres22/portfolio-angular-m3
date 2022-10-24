import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotomLogautComponent } from './botom-logaut.component';

describe('BotomLogautComponent', () => {
  let component: BotomLogautComponent;
  let fixture: ComponentFixture<BotomLogautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotomLogautComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotomLogautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailPage } from './film-detail.page';

describe('FilmDetailPage', () => {
  let component: FilmDetailPage;
  let fixture: ComponentFixture<FilmDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciarFrutaPage } from './gerenciar-fruta.page';

describe('GerenciarFrutaPage', () => {
  let component: GerenciarFrutaPage;
  let fixture: ComponentFixture<GerenciarFrutaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarFrutaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

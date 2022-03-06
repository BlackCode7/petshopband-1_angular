import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarVendaComponent } from './cadastrar-venda.component';

describe('CadastrarVendaComponent', () => {
  let component: CadastrarVendaComponent;
  let fixture: ComponentFixture<CadastrarVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

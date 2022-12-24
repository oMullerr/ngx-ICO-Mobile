import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  ramais = [
    {
      id: 1,
      nome: 'Bombeiro',
      descricao: 'Ramal para entrar em contato com os  bombeiros da planta.',
      ramal: 1234,
    },
    { id: 2, nome: 'Refeitorio', descricao: '', ramal: 1345 },
    { id: 3, nome: 'Portaria', descricao: '', ramal: 1456 },
    {
      id: 4,
      nome: 'RH',
      descricao: 'Ramal para entrar em contato com o time de recursos humanos.',
      ramal: 4000,
    },
    { id: 5, nome: 'CI', descricao: '', ramal: 4001 },
    { id: 6, nome: 'TI', descricao: '', ramal: 4250 },
    { id: 7, nome: 'Financeiro', descricao: '', ramal: 4002 },
    { id: 8, nome: 'Compras', descricao: '', ramal: 4003 },
    {
      id: 9,
      nome: 'ICO',
      descricao:
        'Ramal para entrar em contato com o time de desenvolvimento de software.',
      ramal: 4004,
    },
    { id: 10, nome: 'Diretoria', descricao: '', ramal: 4005 },
    {
      id: 11,
      nome: 'Engenharia',
      descricao: 'Ramal para entrar em contato com o time de engenharia.',
      ramal: 4006,
    },
    { id: 12, nome: 'Produção', descricao: '', ramal: 4007 },
    { id: 13, nome: 'Qualidade', descricao: '', ramal: 4008 },
    { id: 14, nome: 'Segurança', descricao: '', ramal: 4009 },
    { id: 15, nome: 'Manutenção', descricao: '', ramal: 4010 },
    { id: 16, nome: 'Logistica', descricao: '', ramal: 4011 },
    {
      id: 17,
      nome: 'Almoxarifado',
      descricao: 'Ramal para entrar em contato com o time de almoxarifado.',
      ramal: 4012,
    },
    { id: 18, nome: 'Suprimentos', descricao: '', ramal: 4014 },
    { id: 19, nome: 'Comercial', descricao: '', ramal: 4015 },
    { id: 20, nome: 'Marketing', descricao: '', ramal: 4016 },
    { id: 21, nome: 'Vendas', descricao: '', ramal: 4017 },
    { id: 22, nome: 'Serviços', descricao: '', ramal: 4018 },
    { id: 23, nome: 'Cobrança', descricao: '', ramal: 4019 },
    { id: 24, nome: 'Jurídico', descricao: '', ramal: 4020 },
    { id: 25, nome: 'Comunicação', descricao: '', ramal: 4021 },
  ];
}

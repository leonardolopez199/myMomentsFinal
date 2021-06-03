import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
  },
  {
    path: 'vivenciar-momentos',
    loadChildren: () => import('./vivenciar-momentos/vivenciar-momentos.module').then( m => m.VivenciarMomentosPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  },
  {
    path: 'pesquisa',
    loadChildren: () => import('./pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path: 'modal-search',
    loadChildren: () => import('./modal-search/modal-search.module').then( m => m.ModalSearchPageModule)
  },
  {
    path: 'modal-vivenciar-momentos',
    loadChildren: () => import('./modal-vivenciar-momentos/modal-vivenciar-momentos.module').then( m => m.ModalVivenciarMomentosPageModule)
  },
  {
    path: 'momentos',
    loadChildren: () => import('./momentos/momentos.module').then( m => m.MomentosPageModule)
  },
  {
    path: 'detalhe-momento',
    loadChildren: () => import('./detalhe-momento/detalhe-momento.module').then( m => m.DetalheMomentoPageModule)
  },
  {
    path: 'modal-detalhe-momento',
    loadChildren: () => import('./modal-detalhe-momento/modal-detalhe-momento.module').then( m => m.ModalDetalheMomentoPageModule)
  },
  {
    path: 'comprar',
    loadChildren: () => import('./comprar/comprar.module').then( m => m.ComprarPageModule)
  },
  {
    path: 'inserir-morada',
    loadChildren: () => import('./inserir-morada/inserir-morada.module').then( m => m.InserirMoradaPageModule)
  },
  {
    path: 'inserir-pagamento',
    loadChildren: () => import('./inserir-pagamento/inserir-pagamento.module').then( m => m.InserirPagamentoPageModule)
  },
  {
    path: 'momento-video',
    loadChildren: () => import('./momento-video/momento-video.module').then( m => m.MomentoVideoPageModule)
  },
  {
    path: 'dados-encomenda',
    loadChildren: () => import('./dados-encomenda/dados-encomenda.module').then( m => m.DadosEncomendaPageModule)
  },
  {
    path: 'modal-compra-efetuada',
    loadChildren: () => import('./modal-compra-efetuada/modal-compra-efetuada.module').then( m => m.ModalCompraEfetuadaPageModule)
  },
  {
    path: 'modal-apagar-momento',
    loadChildren: () => import('./modal-apagar-momento/modal-apagar-momento.module').then( m => m.ModalApagarMomentoPageModule)
  },
  {
    path: 'modal-partilha',
    loadChildren: () => import('./modal-partilha/modal-partilha.module').then( m => m.ModalPartilhaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

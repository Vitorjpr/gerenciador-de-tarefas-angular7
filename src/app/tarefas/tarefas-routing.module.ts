import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    // :id serve para trocar o id pelo valor real. Esta captura do dado é feita no componente 
    // : -> operador de parâmetros
    // id -> nome referenciado que será capturado no component
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];

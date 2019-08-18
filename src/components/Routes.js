import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TelaPrincipal from './TelaPrincipal';
import TelaClientes from './TelaClientes';
import TelaContatos from './TelaContatos';
import TelaEmpresa from './TelaEmpresa';
import TelaServicos from './TelaServicos';

export default createAppContainer(
    createSwitchNavigator({
        TelaPrincipal,
        TelaClientes,
        TelaContatos,
        TelaEmpresa,
        TelaServicos
    })
);

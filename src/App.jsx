import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Login
import { Login } from './pages/Login';
import EsqueciSenha from './pages/EsqueciSenha';

// Funcionário
import DashboardFuncionario from './pages/funcionario/DashboardFuncionario';
import ConsultarMateriais from './pages/funcionario/ConsultarMateriais';
import RetiradaMaterial from './pages/funcionario/RetiradaMaterial';
import MeuHistorico from './pages/funcionario/MeuHistorico';
import MeuPerfil from './pages/funcionario/MeuPerfil';

// Admin
import DashboardAdmin from './pages/admin/DashboardAdmin';
import Funcionarios from './pages/admin/Funcionarios';
import CadastrarFuncionario from './pages/admin/CadastrarFuncionario';
import Materiais from './pages/admin/Materiais';
import CadastrarMaterial from './pages/admin/CadastrarMaterial';
import EditarMaterial from './pages/admin/EditarMaterial';
import Categorias from './pages/admin/Categorias';
import EntradaEstoque from './pages/admin/EntradaEstoque';
import SaidaEstoque from './pages/admin/SaidaEstoque';
import HistoricoMovimentacoes from './pages/admin/HistoricoMovimentacoes';
import Relatorios from './pages/admin/Relatorios';
import PerfilAdmin from './pages/admin/PerfilAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />

        <Route path="/dashboard" element={<DashboardFuncionario />} />
        <Route path="/consultar-materiais" element={<ConsultarMateriais />} />
        <Route path="/retirada-material" element={<RetiradaMaterial />} />
        <Route path="/meu-historico" element={<MeuHistorico />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />

        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/funcionarios" element={<Funcionarios />} />
        <Route path="/admin/cadastrar-funcionario" element={<CadastrarFuncionario />} />
        <Route path="/admin/materiais" element={<Materiais />} />
        <Route path="/admin/cadastrar-material" element={<CadastrarMaterial />} />
        <Route path="/admin/editar-material" element={<EditarMaterial />} />
        <Route path="/admin/categorias" element={<Categorias />} />
        <Route path="/admin/entrada-estoque" element={<EntradaEstoque />} />
        <Route path="/admin/saida-estoque" element={<SaidaEstoque />} />
        <Route path="/admin/historico-movimentacoes" element={<HistoricoMovimentacoes />} />
        <Route path="/admin/relatorios" element={<Relatorios />} />
        <Route path="/admin/perfil" element={<PerfilAdmin />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
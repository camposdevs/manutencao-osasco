import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Login
import { Login } from './pages/Login';

// Funcionário
import DashboardFuncionario from './pages/DashboardFuncionario';
import ConsultarMateriais from './pages/ConsultarMateriais';
import RetiradaMaterial from './pages/RetiradaMaterial';
import MeuHistorico from './pages/MeuHistorico';
import MeuPerfil from './pages/MeuPerfil';

// Admin
import DashboardAdmin from './pages/DashboardAdmin';
import Funcionarios from './pages/Funcionarios';
import CadastrarFuncionario from './pages/CadastrarFuncionario';
import Materiais from './pages/Materiais';
import CadastrarMaterial from './pages/CadastrarMaterial';
import EditarMaterial from './pages/EditarMaterial';
import Categorias from './pages/Categorias';
import EntradaEstoque from './pages/EntradaEstoque';
import SaidaEstoque from './pages/SaidaEstoque';
import HistoricoMovimentacoes from './pages/HistoricoMovimentacoes';
import Relatorios from './pages/Relatorios';
import PerfilAdmin from './pages/PerfilAdmin';

function App() {
  return (
    <Router>
      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* =========================
            FUNCIONÁRIO
        ========================== */}
        <Route path="/dashboard" element={<DashboardFuncionario />} />
        <Route
          path="/consultar-materiais"
          element={<ConsultarMateriais />}
        />
        <Route
          path="/retirada-material"
          element={<RetiradaMaterial />}
        />
        <Route
          path="/meu-historico"
          element={<MeuHistorico />}
        />
        <Route
          path="/meu-perfil"
          element={<MeuPerfil />}
        />

        {/* =========================
            ADMIN
        ========================== */}
        <Route
          path="/admin/dashboard"
          element={<DashboardAdmin />}
        />

        <Route
          path="/admin/funcionarios"
          element={<Funcionarios />}
        />

        <Route
          path="/admin/cadastrar-funcionario"
          element={<CadastrarFuncionario />}
        />

        <Route
          path="/admin/materiais"
          element={<Materiais />}
        />

        <Route
          path="/admin/cadastrar-material"
          element={<CadastrarMaterial />}
        />

        <Route
          path="/admin/editar-material"
          element={<EditarMaterial />}
        />

        <Route
          path="/admin/categorias"
          element={<Categorias />}
        />

        <Route
          path="/admin/entrada-estoque"
          element={<EntradaEstoque />}
        />

        <Route
          path="/admin/saida-estoque"
          element={<SaidaEstoque />}
        />

        <Route
          path="/admin/historico-movimentacoes"
          element={<HistoricoMovimentacoes />}
        />

        <Route
          path="/admin/relatorios"
          element={<Relatorios />}
        />

        <Route
          path="/admin/perfil"
          element={<PerfilAdmin />}
        />

        {/* REDIRECIONAMENTO */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
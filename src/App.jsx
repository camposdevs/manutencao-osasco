import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importação das páginas
import { Login } from './pages/Login';
import Dashbord_Funcionario from './pages/Dashbord_Funcionario';
import Ferramentas_Funcionario from './pages/Ferramentas_Funcionario';
import Estoque_Funcionario from './pages/Estoque_Funcionario';
import Perfil_Funcionario from './pages/Perfil_Funcionario';

function App() {
  return (
    <Router>
      <Routes>
        {/* Pública */}
        <Route path="/" element={<Login />} />

        {/* Privadas (Funcionário) */}
        <Route path="/dashboard" element={<Dashbord_Funcionario />} />
        <Route path="/ferramentas" element={<Ferramentas_Funcionario />} />
        <Route path="/estoque" element={<Estoque_Funcionario />} />
        <Route path="/perfil" element={<Perfil_Funcionario />} />
        
        {/* Redirecionamento de segurança */}
        {/* Usar o Navigate é uma prática comum para "limpar" a URL errada */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
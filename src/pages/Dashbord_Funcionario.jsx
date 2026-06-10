import React from 'react';
import logoSesi from '/sesi.jpg';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wrench, 
  Box, 
  ClipboardList, 
  User, 
  LogOut, 
  Briefcase, 
  RefreshCcw, 
  Package, 
  Eye,
  Search,
  Menu,
  Users
} from 'lucide-react';

const Dashbord_Funcionario = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-gray-800 font-sans">
      {/* Sidebar Lateral - PADRONIZADA */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          {/* AGORA USANDO A VARIÁVEL IMPORTADA logoSesi */}
          <img 
            src={logoSesi} 
            alt="Logo SESI" 
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={() => navigate('/dashboard')}
          />
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active onClick={() => navigate('/dashboard')} />
          <NavItem icon={<Wrench size={20} />} label="Ferramentas" onClick={() => navigate('/ferramentas')} />
          <NavItem icon={<Box size={20} />} label="Estoque" onClick={() => navigate('/estoque')} />
          <NavItem icon={<ClipboardList size={20} />} label="Empréstimos" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<ClipboardList size={20} />} label="Meus Empréstimos" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<User size={20} />} label="Perfil" onClick={() => navigate('/perfil')} />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 transition-colors w-full">
            <LogOut size={20} />
            <span className="font-medium text-sm">Sair</span>
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col">
        {/* Header Superior - PADRONIZADO */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-gray-600 font-semibold">
            <Menu size={20} className="cursor-pointer" />
            <span>Dashboard</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900 leading-tight">João Silva</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Funcionário</p>
            </div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
              JS
            </div>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Dashboard</h1>
            <p className="text-gray-500 text-sm">Consulte as métricas gerais do sistema.</p>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={<Briefcase className="text-red-500" />} value="58" label="Total de ferramentas" bgColor="bg-red-50" />
            <StatCard icon={<RefreshCcw className="text-green-500" />} value="12" label="Em uso agora" bgColor="bg-green-50" />
            <StatCard icon={<Package className="text-orange-500" />} value="6" label="Baixo estoque" bgColor="bg-orange-50" />
            <StatCard icon={<Users className="text-purple-500" />} value="24" label="Colaboradores" bgColor="bg-purple-50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Tabela Empréstimos */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 font-bold text-gray-900">Empréstimos recentes</div>
              <div className="p-0">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-3 font-bold">Cód</th>
                      <th className="px-6 py-3 font-bold">Colaborador</th>
                      <th className="px-6 py-3 font-bold">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loansData.map((loan) => (
                      <tr key={loan.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-gray-500">{loan.id}</td>
                        <td className="px-6 py-4 font-bold text-gray-900">{loan.user}</td>
                        <td className="px-6 py-4">
                          <Eye size={18} className="text-gray-400 hover:text-red-500 cursor-pointer"/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tabela Baixo Estoque */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 font-bold text-gray-900">Alerta de Estoque</div>
              <div className="p-0">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-3 font-bold">Item</th>
                      <th className="px-6 py-3 font-bold">Qtd</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {stockData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 font-medium text-gray-700">{item.name}</td>
                        <td className={`px-6 py-4 font-bold ${item.qty <= 2 ? 'text-red-600' : 'text-orange-600'}`}>
                          {item.qty} un
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-auto py-6 text-center text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-100 bg-white">
          © 2026 SESI - Sistema de Controle de Estoque e Gerenciamento de Ferramentas
        </footer>
      </main>
    </div>
  );
};

// Componentes Auxiliares
const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
      active ? 'bg-red-50 text-red-600 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const StatCard = ({ icon, value, label, bgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
    <div className={`p-3 ${bgColor} rounded-lg`}>{icon}</div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{label}</p>
    </div>
  </div>
);

const loansData = [
  { id: '#00045', user: 'João Silva', tool: 'Furadeira Bosch' },
  { id: '#00044', user: 'Maria Souza', tool: 'Esmerilhadeira' },
  { id: '#00043', user: 'Pedro Almeida', tool: 'Parafusadeira' },
];

const stockData = [
  { name: 'Disco de Corte 4.1/2"', qty: 4, min: 10 },
  { name: 'Trena 5m', qty: 2, min: 5 },
  { name: 'Furadeira Bosch GSB 550', qty: 1, min: 3 },
];

export default Dashbord_Funcionario;
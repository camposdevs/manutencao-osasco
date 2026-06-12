import React from 'react';
import logoSesi from '/sesi.png';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Boxes,
  Tags,
  ArrowDownToLine,
  ArrowUpFromLine,
  History,
  BarChart3,
  User,
  LogOut,
  Menu,
  Package,
  AlertTriangle,
  Eye,
} from 'lucide-react';

const DashboardAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-gray-800 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <img
            src={logoSesi}
            alt="Logo SESI"
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={() => navigate('/admin/dashboard')}
          />
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active onClick={() => navigate('/admin/dashboard')} />
          <NavItem icon={<Users size={20} />} label="Funcionários" onClick={() => navigate('/admin/funcionarios')} />
          <NavItem icon={<Users size={20} />} label="Cadastrar Funcionário" onClick={() => navigate('/admin/cadastrar-funcionario')} />
          <NavItem icon={<Boxes size={20} />} label="Materiais" onClick={() => navigate('/admin/materiais')} />
          <NavItem icon={<Boxes size={20} />} label="Cadastrar Material" onClick={() => navigate('/admin/cadastrar-material')} />
          <NavItem icon={<Tags size={20} />} label="Categorias" onClick={() => navigate('/admin/categorias')} />
          <NavItem icon={<ArrowDownToLine size={20} />} label="Entrada de Estoque" onClick={() => navigate('/admin/entrada-estoque')} />
          <NavItem icon={<ArrowUpFromLine size={20} />} label="Saída de Estoque" onClick={() => navigate('/admin/saida-estoque')} />
          <NavItem icon={<History size={20} />} label="Histórico" onClick={() => navigate('/admin/historico-movimentacoes')} />
          <NavItem icon={<BarChart3 size={20} />} label="Relatórios" onClick={() => navigate('/admin/relatorios')} />
          <NavItem icon={<User size={20} />} label="Perfil" onClick={() => navigate('/admin/perfil')} />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 transition-colors w-full text-left"
          >
            <LogOut size={20} />
            <span className="font-medium text-sm">Sair</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-gray-600 font-semibold">
            <Menu size={20} />
            <span>Dashboard Admin</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900 leading-tight">Administrador</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Admin</p>
            </div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
              AD
            </div>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Dashboard Admin</h1>
            <p className="text-gray-500 text-sm">Visão geral do controle de estoque.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={<Boxes className="text-red-500" />} value="58" label="Materiais cadastrados" bgColor="bg-red-50" />
            <StatCard icon={<Package className="text-green-500" />} value="856" label="Itens em estoque" bgColor="bg-green-50" />
            <StatCard icon={<AlertTriangle className="text-orange-500" />} value="6" label="Estoque baixo" bgColor="bg-orange-50" />
            <StatCard icon={<Users className="text-purple-500" />} value="12" label="Funcionários" bgColor="bg-purple-50" />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 font-bold text-gray-900">
              Últimas movimentações
            </div>

            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-3 font-bold">Cód</th>
                  <th className="px-6 py-3 font-bold">Tipo</th>
                  <th className="px-6 py-3 font-bold">Material</th>
                  <th className="px-6 py-3 font-bold">Responsável</th>
                  <th className="px-6 py-3 font-bold">Ação</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {movimentacoesData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{item.id}</td>
                    <td className="px-6 py-4">
                      <span className={`font-bold ${item.type === 'Entrada' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.material}</td>
                    <td className="px-6 py-4 text-gray-600">{item.user}</td>
                    <td className="px-6 py-4">
                      <Eye size={18} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-auto py-6 text-center text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-100 bg-white">
          © 2026 SESI - Sistema de Controle de Estoque
        </footer>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
      active
        ? 'bg-red-50 text-red-600 font-bold shadow-sm'
        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
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

const movimentacoesData = [
  { id: '#00052', type: 'Entrada', material: 'Fita Isolante 20m', user: 'Administrador' },
  { id: '#00051', type: 'Saída', material: 'Luva de Proteção', user: 'João Silva' },
  { id: '#00050', type: 'Saída', material: 'Parafuso Sextavado', user: 'Maria Souza' },
];

export default DashboardAdmin;
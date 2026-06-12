import React from 'react';
import logoSesi from '/sesi.png';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Boxes,
  ClipboardList,
  History,
  User,
  LogOut,
  Package,
  AlertTriangle,
  Menu,
  Eye,
} from 'lucide-react';

const DashboardFuncionario = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-gray-800 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <img
            src={logoSesi}
            alt="Logo SESI"
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={() => navigate('/dashboard')}
          />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active onClick={() => navigate('/dashboard')} />
          <NavItem icon={<Boxes size={20} />} label="Consultar Materiais" onClick={() => navigate('/consultar-materiais')} />
          <NavItem icon={<ClipboardList size={20} />} label="Retirar Material" onClick={() => navigate('/retirada-material')} />
          <NavItem icon={<History size={20} />} label="Meu Histórico" onClick={() => navigate('/meu-historico')} />
          <NavItem icon={<User size={20} />} label="Meu Perfil" onClick={() => navigate('/meu-perfil')} />
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
            <p className="text-gray-500 text-sm">Consulte as informações gerais do estoque.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={<Boxes className="text-red-500" />} value="58" label="Materiais cadastrados" bgColor="bg-red-50" />
            <StatCard icon={<Package className="text-green-500" />} value="856" label="Itens em estoque" bgColor="bg-green-50" />
            <StatCard icon={<AlertTriangle className="text-orange-500" />} value="6" label="Estoque baixo" bgColor="bg-orange-50" />
            <StatCard icon={<ClipboardList className="text-purple-500" />} value="3" label="Minhas retiradas" bgColor="bg-purple-50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 font-bold text-gray-900">
                Materiais com estoque baixo
              </div>

              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 font-bold">Material</th>
                    <th className="px-6 py-3 font-bold">Qtd</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {stockData.map((item) => (
                    <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-700">{item.name}</td>
                      <td className={`px-6 py-4 font-bold ${item.qty <= 5 ? 'text-red-600' : 'text-orange-600'}`}>
                        {item.qty} {item.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-100 font-bold text-gray-900">
                Minhas últimas retiradas
              </div>

              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3 font-bold">Cód</th>
                    <th className="px-6 py-3 font-bold">Material</th>
                    <th className="px-6 py-3 font-bold">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {withdrawalsData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500">{item.id}</td>
                      <td className="px-6 py-4 font-bold text-gray-900">{item.material}</td>
                      <td className="px-6 py-4">
                        <Eye size={18} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

const stockData = [
  { name: 'Luva de Proteção Nitrílica', qty: 4, unit: 'pares' },
  { name: 'Eletrodo Revestido 2.5mm', qty: 3, unit: 'kg' },
  { name: 'Fita Isolante 20m', qty: 5, unit: 'rolos' },
];

const withdrawalsData = [
  { id: '#00045', material: 'Fita Isolante 20m' },
  { id: '#00044', material: 'Luva de Proteção Nitrílica' },
  { id: '#00043', material: 'Parafuso Sextavado 8mm' },
];

export default DashboardFuncionario;
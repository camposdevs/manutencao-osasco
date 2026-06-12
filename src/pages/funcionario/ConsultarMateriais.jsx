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
  Search,
  FilterX,
  Menu,
} from 'lucide-react';

const ConsultarMateriais = () => {
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
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<Boxes size={20} />} label="Consultar Materiais" active onClick={() => navigate('/consultar-materiais')} />
          <NavItem icon={<ClipboardList size={20} />} label="Retirar Material" onClick={() => navigate('/retirada-material')} />
          <NavItem icon={<History size={20} />} label="Meu Histórico" onClick={() => navigate('/meu-historico')} />
          <NavItem icon={<User size={20} />} label="Meu Perfil" onClick={() => navigate('/meu-perfil')} />
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 transition-colors w-full text-left">
            <LogOut size={20} />
            <span className="font-medium text-sm">Sair</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-gray-600 font-semibold">
            <Menu size={20} />
            <span>Consultar Materiais</span>
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

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Consultar Materiais</h1>
            <p className="text-gray-500 text-sm">Visualize todos os materiais disponíveis no estoque.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[300px]">
              <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                Pesquisar Material
              </label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Nome, código ou categoria..."
                  className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>

            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
              <FilterX size={18} />
              Limpar filtros
            </button>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold">Código</th>
                  <th className="px-6 py-4 font-bold">Material</th>
                  <th className="px-6 py-4 font-bold">Categoria</th>
                  <th className="px-6 py-4 text-center font-bold">Quantidade</th>
                  <th className="px-6 py-4 text-center font-bold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {stockData.map((item) => (
                  <tr key={item.code} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{item.code}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-gray-600 text-xs">{item.category}</td>
                    <td className="px-6 py-4 text-center font-bold">{item.qty}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                          item.qty <= 5 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {item.qty <= 5 ? 'Baixo' : 'Disponível'}
                      </span>
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

const stockData = [
  { code: 'MAT001', name: 'Luva de Proteção', category: 'EPI', qty: 45 },
  { code: 'MAT002', name: 'Fita Isolante', category: 'Elétrica', qty: 12 },
  { code: 'MAT003', name: 'Parafuso Sextavado', category: 'Fixação', qty: 500 },
  { code: 'MAT004', name: 'Graxa Azul', category: 'Lubrificantes', qty: 4 },
];

export default ConsultarMateriais;
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
  Menu,
} from 'lucide-react';

const MeuHistorico = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-gray-800 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <img src={logoSesi} alt="Logo SESI" className="h-10 w-auto object-contain cursor-pointer" onClick={() => navigate('/dashboard')} />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<Boxes size={20} />} label="Consultar Materiais" onClick={() => navigate('/consultar-materiais')} />
          <NavItem icon={<ClipboardList size={20} />} label="Retirar Material" onClick={() => navigate('/retirada-material')} />
          <NavItem icon={<History size={20} />} label="Meu Histórico" active onClick={() => navigate('/meu-historico')} />
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
            <span>Meu Histórico</span>
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
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Meu Histórico</h1>
            <p className="text-gray-500 text-sm">Consulte suas retiradas de materiais.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold">Código</th>
                  <th className="px-6 py-4 font-bold">Material</th>
                  <th className="px-6 py-4 text-center font-bold">Qtd</th>
                  <th className="px-6 py-4 font-bold">Data</th>
                  <th className="px-6 py-4 text-center font-bold">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {historicoData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-500">{item.id}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.material}</td>
                    <td className="px-6 py-4 text-center font-bold">{item.qtd}</td>
                    <td className="px-6 py-4 text-gray-600">{item.data}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                        Concluído
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

const historicoData = [
  { id: '#00045', material: 'Fita Isolante 20m', qtd: 2, data: '12/06/2026' },
  { id: '#00044', material: 'Luva de Proteção', qtd: 1, data: '10/06/2026' },
  { id: '#00043', material: 'Parafuso Sextavado', qtd: 10, data: '08/06/2026' },
];

export default MeuHistorico;
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
  Save,
} from 'lucide-react';

const RetiradaMaterial = () => {
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
          <NavItem icon={<Boxes size={20} />} label="Consultar Materiais" onClick={() => navigate('/consultar-materiais')} />
          <NavItem icon={<ClipboardList size={20} />} label="Retirar Material" active onClick={() => navigate('/retirada-material')} />
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
            <Menu size={20} />
            <span>Retirar Material</span>
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
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Retirada de Material
            </h1>
            <p className="text-gray-500 text-sm">
              Registre a retirada de materiais do estoque.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-5xl">
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Material
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all">
                    <option>Selecione um material</option>
                    <option>MAT001 - Luva de Proteção</option>
                    <option>MAT002 - Fita Isolante</option>
                    <option>MAT003 - Parafuso Sextavado</option>
                    <option>MAT004 - Graxa Azul</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Quantidade
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 2"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Local de uso
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Oficina de manutenção"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Prioridade
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all">
                    <option>Normal</option>
                    <option>Urgente</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Observação
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Descreva o motivo da retirada..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all">
                Cancelar
              </button>

              <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all shadow-sm shadow-red-200 active:scale-95 flex items-center gap-2">
                <Save size={16} />
                Registrar Retirada
              </button>
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

export default RetiradaMaterial;
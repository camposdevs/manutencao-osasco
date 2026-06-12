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
  Save,
} from 'lucide-react';

const SaidaEstoque = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] text-gray-800 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        <div className="p-6">
          <img src={logoSesi} alt="Logo SESI" className="h-10 w-auto object-contain cursor-pointer" onClick={() => navigate('/admin/dashboard')} />
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/admin/dashboard')} />
          <NavItem icon={<Users size={20} />} label="Funcionários" onClick={() => navigate('/admin/funcionarios')} />
          <NavItem icon={<Users size={20} />} label="Cadastrar Funcionário" onClick={() => navigate('/admin/cadastrar-funcionario')} />
          <NavItem icon={<Boxes size={20} />} label="Materiais" onClick={() => navigate('/admin/materiais')} />
          <NavItem icon={<Boxes size={20} />} label="Cadastrar Material" onClick={() => navigate('/admin/cadastrar-material')} />
          <NavItem icon={<Tags size={20} />} label="Categorias" onClick={() => navigate('/admin/categorias')} />
          <NavItem icon={<ArrowDownToLine size={20} />} label="Entrada de Estoque" onClick={() => navigate('/admin/entrada-estoque')} />
          <NavItem icon={<ArrowUpFromLine size={20} />} label="Saída de Estoque" active onClick={() => navigate('/admin/saida-estoque')} />
          <NavItem icon={<History size={20} />} label="Histórico" onClick={() => navigate('/admin/historico-movimentacoes')} />
          <NavItem icon={<BarChart3 size={20} />} label="Relatórios" onClick={() => navigate('/admin/relatorios')} />
          <NavItem icon={<User size={20} />} label="Perfil" onClick={() => navigate('/admin/perfil')} />
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
            <span>Saída de Estoque</span>
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

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Saída de Estoque</h1>
            <p className="text-gray-500 text-sm">Registre a saída de materiais do estoque.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-5xl">
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">Material</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all">
                  <option>Selecione um material</option>
                  <option>MAT001 - Luva de Proteção</option>
                  <option>MAT002 - Fita Isolante</option>
                  <option>MAT003 - Parafuso Sextavado</option>
                  <option>MAT004 - Graxa Azul</option>
                </select>
              </div>

              <Input label="Quantidade" placeholder="Ex: 5" type="number" />
              <Input label="Responsável pela retirada" placeholder="Ex: João Silva" />
              <Input label="Data da Saída" placeholder="Ex: 12/06/2026" />
              <Input label="Destino / Local de uso" placeholder="Ex: Oficina de manutenção" />

              <div>
                <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">Tipo de saída</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all">
                  <option>Retirada por funcionário</option>
                  <option>Baixa de estoque</option>
                  <option>Perda / avaria</option>
                </select>
              </div>

              <div className="lg:col-span-2">
                <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">Observação</label>
                <textarea
                  rows="4"
                  placeholder="Observações sobre a saída..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all resize-none"
                />
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all">
                Cancelar
              </button>

              <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all shadow-sm shadow-red-200 active:scale-95 flex items-center gap-2">
                <Save size={16} />
                Registrar Saída
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
  <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
    active ? 'bg-red-50 text-red-600 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
  }`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const Input = ({ label, placeholder, type = 'text' }) => (
  <div>
    <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
    />
  </div>
);

export default SaidaEstoque;
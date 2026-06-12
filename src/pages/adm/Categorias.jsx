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
  Pencil,
  Trash2,
} from 'lucide-react';

const Categorias = () => {
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
          <NavItem icon={<Tags size={20} />} label="Categorias" active onClick={() => navigate('/admin/categorias')} />
          <NavItem icon={<ArrowDownToLine size={20} />} label="Entrada de Estoque" onClick={() => navigate('/admin/entrada-estoque')} />
          <NavItem icon={<ArrowUpFromLine size={20} />} label="Saída de Estoque" onClick={() => navigate('/admin/saida-estoque')} />
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
            <span>Categorias</span>
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
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Categorias</h1>
            <p className="text-gray-500 text-sm">Organize os materiais por categorias.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
              <Input label="Nome da categoria" placeholder="Ex: Elétrica" />
              <Input label="Descrição" placeholder="Ex: Materiais elétricos" />

              <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all shadow-sm shadow-red-200 active:scale-95 flex items-center justify-center gap-2">
                <Save size={16} />
                Salvar Categoria
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold">Categoria</th>
                  <th className="px-6 py-4 font-bold">Descrição</th>
                  <th className="px-6 py-4 text-center font-bold">Materiais</th>
                  <th className="px-6 py-4 text-center font-bold">Ações</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {categoriasData.map((item) => (
                  <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-gray-600">{item.description}</td>
                    <td className="px-6 py-4 text-center font-bold">{item.total}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3">
                        <button>
                          <Pencil size={18} className="text-blue-500 hover:text-blue-700" />
                        </button>
                        <button>
                          <Trash2 size={18} className="text-red-500 hover:text-red-700" />
                        </button>
                      </div>
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
  <div onClick={onClick} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
    active ? 'bg-red-50 text-red-600 font-bold shadow-sm' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
  }`}>
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
    />
  </div>
);

const categoriasData = [
  { name: 'EPI', description: 'Equipamentos de proteção individual', total: 12 },
  { name: 'Elétrica', description: 'Materiais elétricos e componentes', total: 18 },
  { name: 'Fixação', description: 'Parafusos, buchas e acessórios', total: 24 },
  { name: 'Lubrificantes', description: 'Graxas, óleos e produtos similares', total: 6 },
];

export default Categorias;
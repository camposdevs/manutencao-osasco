import React, { useState } from 'react';
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
  Lock,
  Eye,
  EyeOff,
  Info,
} from 'lucide-react';

const PerfilAdmin = () => {
  const navigate = useNavigate();

  const [showPasswords, setShowPasswords] = useState({
    atual: false,
    nova: false,
    confirmar: false,
  });

  const togglePassword = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

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
          <NavItem icon={<ArrowUpFromLine size={20} />} label="Saída de Estoque" onClick={() => navigate('/admin/saida-estoque')} />
          <NavItem icon={<History size={20} />} label="Histórico" onClick={() => navigate('/admin/historico-movimentacoes')} />
          <NavItem icon={<BarChart3 size={20} />} label="Relatórios" onClick={() => navigate('/admin/relatorios')} />
          <NavItem icon={<User size={20} />} label="Perfil" active onClick={() => navigate('/admin/perfil')} />
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
            <span>Perfil Admin</span>
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

        <div className="p-8 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Perfil Admin</h1>
            <p className="text-gray-500 text-sm">Visualize seus dados e altere sua senha.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Dados do Administrador
                  </h3>

                  <div className="space-y-4">
                    <ProfileField label="Nome" value="Administrador" />
                    <ProfileField label="NIF" value="25163131" />
                    <ProfileField label="Cargo" value="Administrador do Sistema" />
                    <ProfileField label="Permissão" value="Admin" />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 items-start text-amber-800">
                  <Info size={20} className="shrink-0 text-amber-600 mt-0.5" />
                  <p className="text-xs leading-relaxed">
                    <span className="font-bold uppercase mr-1">Importante:</span>
                    A alteração real de senha será integrada ao banco de dados futuramente.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <PasswordField label="Senha Atual" placeholder="••••••••" visible={showPasswords.atual} toggle={() => togglePassword('atual')} />
                <PasswordField label="Nova Senha" placeholder="Digite sua nova senha" visible={showPasswords.nova} toggle={() => togglePassword('nova')} />
                <PasswordField label="Confirmar Nova Senha" placeholder="Confirme a nova senha" visible={showPasswords.confirmar} toggle={() => togglePassword('confirmar')} />

                <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-all shadow-sm shadow-red-200 flex items-center justify-center gap-2">
                  <Lock size={16} />
                  Atualizar Senha
                </button>
              </div>
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

const ProfileField = ({ label, value }) => (
  <div>
    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
    <div className="mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700">
      {value}
    </div>
  </div>
);

const PasswordField = ({ label, placeholder, visible, toggle }) => (
  <div>
    <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">{label}</label>

    <div className="relative">
      <input
        type={visible ? 'text' : 'password'}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
      />

      <button
        type="button"
        onClick={toggle}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>
);

export default PerfilAdmin;
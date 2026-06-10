import React, { useState } from 'react';
import logoSesi from '/sesi.jpg';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wrench, 
  Box, 
  ClipboardList, 
  User, 
  LogOut, 
  Settings,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  Info,
  Menu
} from 'lucide-react';

const Perfil_Funcionario = () => {
  const navigate = useNavigate();
  const [showPasswords, setShowPasswords] = useState({ actual: false, new: false, confirm: false });

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }));
  };

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
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<Wrench size={20} />} label="Ferramentas" onClick={() => navigate('/ferramentas')} />
          <NavItem icon={<Box size={20} />} label="Estoque" onClick={() => navigate('/estoque')} />
          <NavItem icon={<ClipboardList size={20} />} label="Empréstimos" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<ClipboardList size={20} />} label="Meus Empréstimos" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<User size={20} />} label="Perfil" active={true} onClick={() => navigate('/perfil')} />
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

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col">
        {/* Header Superior - PADRONIZADO */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-gray-600 font-semibold">
            <Menu size={20} className="cursor-pointer" />
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>Configurações de Perfil</span>
            </div>
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

        {/* Área de Conteúdo */}
        <div className="p-8 max-w-5xl mx-auto w-full">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Privacidade e Segurança</h1>
            <p className="text-gray-500 text-sm mt-1">Atualize sua senha de acesso periodicamente para manter sua conta protegida.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Card Principal */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Lado Esquerdo: Requisitos */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Segurança da Senha</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Sua senha deve ser difícil de adivinhar e não deve ser compartilhada com ninguém.
                      </p>
                    </div>

                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
                      <div className="flex items-center gap-2 text-blue-700 mb-4 font-bold">
                        <Settings size={18} />
                        <span className="text-[10px] uppercase tracking-widest">Padrão Exigido</span>
                      </div>
                      <ul className="space-y-3">
                        <PasswordTip label="Letras maiúsculas e minúsculas" />
                        <PasswordTip label="Pelo menos um número" />
                        <PasswordTip label="Caractere especial (!@#$%)" />
                        <PasswordTip label="Mínimo de 8 caracteres" />
                      </ul>
                    </div>
                  </div>

                  {/* Lado Direito: Formulário */}
                  <div className="space-y-5">
                    <PasswordField 
                      label="Senha Atual" 
                      placeholder="••••••••"
                      isVisible={showPasswords.actual}
                      toggle={() => togglePasswordVisibility('actual')}
                    />
                    <PasswordField 
                      label="Nova Senha" 
                      placeholder="Mínimo 8 caracteres"
                      isVisible={showPasswords.new}
                      toggle={() => togglePasswordVisibility('new')}
                    />
                    <PasswordField 
                      label="Confirmar Nova Senha" 
                      placeholder="Repita a nova senha"
                      isVisible={showPasswords.confirm}
                      toggle={() => togglePasswordVisibility('confirm')}
                    />

                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                      <button className="flex-1 px-6 py-2.5 bg-red-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all shadow-sm shadow-red-200 active:scale-95 flex items-center justify-center gap-2">
                        <Lock size={16} />
                        Atualizar Senha
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso de Segurança */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 items-start text-amber-800">
              <Info size={20} className="shrink-0 text-amber-600 mt-0.5" />
              <p className="text-xs leading-relaxed">
                <span className="font-bold uppercase mr-1">Importante:</span>
                Ao confirmar a alteração, sua sessão será mantida apenas neste navegador. Outros acessos em tablets ou celulares precisarão de login com a nova credencial.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé - PADRONIZADO */}
        <footer className="mt-auto py-6 text-center text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-100 bg-white">
          © 2026 SESI - Sistema de Controle de Estoque e Gerenciamento de Ferramentas
        </footer>
      </main>
    </div>
  );
};

// --- COMPONENTES AUXILIARES ---

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
      active 
        ? 'bg-red-50 text-red-600 shadow-sm font-bold' 
        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium'
    }`}
  >
    {icon}
    <span className="text-sm">{label}</span>
  </div>
);

const PasswordField = ({ label, placeholder, isVisible, toggle }) => (
  <div>
    <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">{label}</label>
    <div className="relative shadow-sm rounded-lg">
      <input 
        type={isVisible ? "text" : "password"} 
        placeholder={placeholder} 
        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-red-100 focus:border-red-500 outline-none transition-all bg-gray-50/30"
      />
      <button 
        type="button"
        onClick={toggle} 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>
);

const PasswordTip = ({ label }) => (
  <li className="flex items-center gap-2 text-xs text-gray-600 font-semibold">
    <CheckCircle2 size={16} className="text-blue-500" />
    {label}
  </li>
);

export default Perfil_Funcionario;
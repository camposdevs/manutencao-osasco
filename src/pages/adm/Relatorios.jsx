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
  FileText,
  Package,
  AlertTriangle,
} from 'lucide-react';

const Relatorios = () => {
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
          <NavItem icon={<ArrowUpFromLine size={20} />} label="Saída de Estoque" onClick={() => navigate('/admin/saida-estoque')} />
          <NavItem icon={<History size={20} />} label="Histórico" onClick={() => navigate('/admin/historico-movimentacoes')} />
          <NavItem icon={<BarChart3 size={20} />} label="Relatórios" active onClick={() => navigate('/admin/relatorios')} />
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
            <span>Relatórios</span>
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
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Relatórios</h1>
            <p className="text-gray-500 text-sm">Acompanhe indicadores e relatórios do estoque.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard icon={<FileText className="text-red-500" />} value="12" label="Relatórios gerados" bgColor="bg-red-50" />
            <StatCard icon={<Package className="text-green-500" />} value="856" label="Itens disponíveis" bgColor="bg-green-50" />
            <StatCard icon={<ArrowDownToLine className="text-blue-500" />} value="42" label="Entradas no mês" bgColor="bg-blue-50" />
            <StatCard icon={<AlertTriangle className="text-orange-500" />} value="6" label="Alertas de estoque" bgColor="bg-orange-50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Resumo Mensal</h3>
              <p className="text-sm text-gray-500 mb-6">Indicador visual temporário para futura integração.</p>

              <div className="space-y-4">
                <Progress label="Entradas" value="80%" width="80%" />
                <Progress label="Saídas" value="55%" width="55%" />
                <Progress label="Estoque baixo" value="25%" width="25%" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Relatórios disponíveis</h3>
              <p className="text-sm text-gray-500 mb-6">Opções visuais para exportação futura.</p>

              <div className="space-y-3">
                <ReportItem title="Relatório de materiais" desc="Lista completa de materiais cadastrados." />
                <ReportItem title="Relatório de movimentações" desc="Entradas e saídas do estoque." />
                <ReportItem title="Relatório de estoque baixo" desc="Materiais que precisam de reposição." />
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

const StatCard = ({ icon, value, label, bgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
    <div className={`p-3 ${bgColor} rounded-lg`}>{icon}</div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{label}</p>
    </div>
  </div>
);

const Progress = ({ label, value, width }) => (
  <div>
    <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
      <div className="h-full bg-red-600 rounded-full" style={{ width }}></div>
    </div>
  </div>
);

const ReportItem = ({ title, desc }) => (
  <div className="p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
    <p className="font-bold text-gray-900 text-sm">{title}</p>
    <p className="text-xs text-gray-500 mt-1">{desc}</p>
  </div>
);

export default Relatorios;
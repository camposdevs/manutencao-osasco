import React from 'react';
import logoSesi from '/sesi.png';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wrench, 
  Box, 
  ClipboardList, 
  User, 
  LogOut, 
  Search, 
  FilterX, 
  AlertTriangle,
  Archive,
  BarChart3,
  Layers,
  Menu
} from 'lucide-react';

const Estoque_Funcionario = () => {
  const navigate = useNavigate();

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
          <NavItem icon={<Box size={20} />} label="Estoque" active={true} onClick={() => navigate('/estoque')} />
          <NavItem icon={<ClipboardList size={20} />} label="Empréstimos" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<ClipboardList size={20} />} label="Meus Empréstimos" onClick={() => navigate('/dashboard')} />
          <NavItem icon={<User size={20} />} label="Perfil" onClick={() => navigate('/perfil')} />
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
              <Archive size={18} />
              <span>Estoque</span>
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

        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">Estoque de Materiais</h1>
            <p className="text-gray-500 text-sm">Visualize o saldo de materiais de consumo e componentes.</p>
          </div>

          {/* Cards de Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <SummaryCard icon={<Layers size={20} />} label="Total de Itens" value="1.240" sub="unid." colorClass="text-blue-600" bgColor="bg-blue-50" />
            <SummaryCard icon={<BarChart3 size={20} />} label="Em Estoque" value="856" sub="itens" colorClass="text-green-600" bgColor="bg-green-50" />
            <SummaryCard icon={<AlertTriangle size={20} />} label="Estoque Baixo" value="12" sub="alerta" colorClass="text-red-600" bgColor="bg-red-50" />
            <SummaryCard icon={<Archive size={20} />} label="Categorias" value="18" sub="tipos" colorClass="text-gray-600" bgColor="bg-gray-100" />
          </div>

          {/* Filtros */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6 flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[300px]">
              <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">Pesquisar Material</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Nome, código ou especificação..." 
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

          {/* Tabela de Estoque */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold">Código</th>
                  <th className="px-6 py-4 font-bold">Item</th>
                  <th className="px-6 py-4 font-bold">Categoria</th>
                  <th className="px-6 py-4 text-center font-bold">Qtd. Atual</th>
                  <th className="px-6 py-4 text-center font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stockData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-500">{item.code}</td>
                    <td className="px-6 py-4 font-bold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-gray-600 text-xs">{item.category}</td>
                    <td className="px-6 py-4 text-center font-bold">
                      {item.currentQty} <span className="text-[10px] text-gray-400 font-normal">{item.unit}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                        item.currentQty <= item.minQty 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.currentQty <= item.minQty ? 'Repor Agora' : 'Em Dia'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="mt-auto py-6 text-center text-gray-400 text-[10px] uppercase tracking-widest border-t border-gray-100 bg-white">
          © 2026 SESI - Sistema de Controle de Estoque e Gerenciamento de Ferramentas
        </footer>
      </main>
    </div>
  );
};

// Componentes Auxiliares Padronizados
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

const SummaryCard = ({ icon, label, value, sub, colorClass, bgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
    <div className={`p-3 rounded-lg ${bgColor} ${colorClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-[10px] text-gray-400 font-medium">{sub}</span>
      </div>
    </div>
  </div>
);

const stockData = [
  { code: 'MAT001', name: 'Luva de Proteção Nitrílica', category: 'Segurança (EPI)', currentQty: 45, minQty: 50, unit: 'Pares' },
  { code: 'MAT042', name: 'Parafuso Sextavado 8mm', category: 'Fixação', currentQty: 500, minQty: 100, unit: 'Unid.' },
  { code: 'MAT089', name: 'Eletrodo Revestido 2.5mm', category: 'Soldagem', currentQty: 15, minQty: 20, unit: 'Kg' },
  { code: 'MAT102', name: 'Fita Isolante 20m', category: 'Elétrica', currentQty: 12, minQty: 10, unit: 'Rolos' },
  { code: 'MAT156', name: 'Graxa Azul Lítio', category: 'Lubrificantes', currentQty: 4, minQty: 5, unit: 'Potes' },
  { code: 'MAT210', name: 'Disco de Lixa G80', category: 'Abrasivos', currentQty: 120, minQty: 50, unit: 'Unid.' },
];

export default Estoque_Funcionario;
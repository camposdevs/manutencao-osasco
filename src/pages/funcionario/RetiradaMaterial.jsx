import React, { useState } from 'react';
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

const usuarioData = {
  nome: 'João Silva',
  cargo: 'Funcionário',
  iniciais: 'JS',
};

const materiaisData = [
  { id: 1, codigo: 'MAT001', nome: 'Luva de Proteção', quantidade: 45, unidade: 'unid.' },
  { id: 2, codigo: 'MAT002', nome: 'Fita Isolante', quantidade: 12, unidade: 'unid.' },
  { id: 3, codigo: 'MAT003', nome: 'Parafuso Sextavado', quantidade: 500, unidade: 'unid.' },
  { id: 4, codigo: 'MAT004', nome: 'Graxa Azul', quantidade: 4, unidade: 'unid.' },
];

const RetiradaMaterial = () => {
  const navigate = useNavigate();

  const [materialId, setMaterialId] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [localUso, setLocalUso] = useState('');
  const [prioridade, setPrioridade] = useState('Normal');
  const [observacao, setObservacao] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const materialSelecionado = materiaisData.find(
    (material) => material.id === Number(materialId)
  );

  const limparFormulario = () => {
    setMaterialId('');
    setQuantidade('');
    setLocalUso('');
    setPrioridade('Normal');
    setObservacao('');
    setErro('');
    setSucesso('');
  };

  const registrarRetirada = (e) => {
    e.preventDefault();

    setErro('');
    setSucesso('');

    const quantidadeNumerica = Number(quantidade);

    if (!materialId) {
      setErro('Selecione um material.');
      return;
    }

    if (!quantidade || quantidadeNumerica <= 0) {
      setErro('A quantidade deve ser maior que zero.');
      return;
    }

    if (quantidadeNumerica > materialSelecionado.quantidade) {
      setErro(`Quantidade indisponível. Estoque atual: ${materialSelecionado.quantidade} ${materialSelecionado.unidade}`);
      return;
    }

    if (localUso.trim() === '') {
      setErro('Informe o local de uso.');
      return;
    }

    const retirada = {
      material_id: materialSelecionado.id,
      material_nome: materialSelecionado.nome,
      quantidade: quantidadeNumerica,
      local_uso: localUso,
      prioridade,
      observacao,
      funcionario: usuarioData.nome,
      data: new Date().toISOString(),
    };

    console.log('Retirada pronta para enviar ao banco:', retirada);

    setSucesso('Retirada registrada com sucesso. Depois ela será enviada para o banco.');
    setQuantidade('');
    setLocalUso('');
    setObservacao('');
  };

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
              <p className="text-sm font-bold text-gray-900 leading-tight">{usuarioData.nome}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{usuarioData.cargo}</p>
            </div>
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
              {usuarioData.iniciais}
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

          <form onSubmit={registrarRetirada} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden max-w-5xl">
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Material
                  </label>
                  <select
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
                  >
                    <option value="">Selecione um material</option>
                    {materiaisData.map((material) => (
                      <option key={material.id} value={material.id}>
                        {material.codigo} - {material.nome}
                      </option>
                    ))}
                  </select>
                </div>

                {materialSelecionado && (
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Estoque disponível
                    </p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {materialSelecionado.quantidade} {materialSelecionado.unidade}
                    </p>
                  </div>
                )}

                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Quantidade
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={materialSelecionado?.quantidade || undefined}
                    placeholder="Ex: 2"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
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
                    value={localUso}
                    onChange={(e) => setLocalUso(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">
                    Prioridade
                  </label>
                  <select
                    value={prioridade}
                    onChange={(e) => setPrioridade(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all"
                  >
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
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all resize-none"
                  />
                </div>

                {erro && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
                    {erro}
                  </div>
                )}

                {sucesso && (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm font-medium">
                    {sucesso}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button
                type="button"
                onClick={limparFormulario}
                className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-all"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all shadow-sm shadow-red-200 active:scale-95 flex items-center gap-2"
              >
                <Save size={16} />
                Registrar Retirada
              </button>
            </div>
          </form>
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
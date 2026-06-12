import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoSesi from '/sesi.png';

const EsqueciSenha = () => {
  const navigate = useNavigate();
  const [nif, setNif] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nif.trim() === '') {
      alert('Informe seu NIF.');
      return;
    }

    alert('Solicitação enviada para o administrador.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex flex-col font-sans antialiased">
      <div className="h-14 bg-[#E30613] w-full shadow-md"></div>

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <img src={logoSesi} alt="SESI" className="h-20 object-contain" />
        </div>

        <div className="bg-white w-full max-w-[420px] rounded-lg shadow-xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              Esqueci minha senha
            </h2>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Informe seu NIF para solicitar a redefinição da senha.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">
                NIF
              </label>

              <input
                type="text"
                placeholder="Digite seu NIF"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-gray-700"
                value={nif}
                onChange={(e) => setNif(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E30613] text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 active:scale-[0.98] transition-all shadow-lg shadow-red-100"
            >
              Solicitar redefinição
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full text-red-600 font-bold hover:underline text-sm"
            >
              Voltar para login
            </button>
          </form>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">
            © 2026 SESI
          </p>
        </footer>
      </div>
    </div>
  );
};

export default EsqueciSenha;
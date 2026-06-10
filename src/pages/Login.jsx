import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importar o hook
import logoSesi from '/sesi.jpg';

export function Login() {
  const [nif, setNif] = useState('');
  const [senha, setSenha] = useState('');
  const [verSenha, setVerSenha] = useState(false);
  
  const navigate = useNavigate(); // 2. Inicializar o navegador

  // 3. Função que lida com o clique do botão
  const handleLogin = (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    if (nif.trim() !== '' && senha.trim() !== '') {
      // Se os campos não estiverem vazios, vai para o dashboard
      navigate('/dashboard');
    } else {
      alert('Por favor, preencha o NIF e a Senha.');
    }
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
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Bem-vindo!</h2>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Acesse o sistema de controle de estoque <br /> e gerenciamento de ferramentas.
            </p>
          </div>

          {/* 4. Adicionar a função no onSubmit */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">NIF</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Digite seu NIF"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-gray-700"
                  value={nif}
                  onChange={(e) => setNif(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Senha</label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-4 flex items-center text-gray-400 group-focus-within:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input 
                  type={verSenha ? "text" : "password"}
                  placeholder="Digite sua senha"
                  className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-gray-700"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setVerSenha(!verSenha)}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {verSenha ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm py-2">
              <button type="button" className="text-red-600 font-bold hover:underline">
                Esqueci minha senha
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#E30613] text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 active:scale-[0.98] transition-all shadow-lg shadow-red-100 mt-2"
            >
              Entrar no Sistema
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
}
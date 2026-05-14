import React from 'react';

export default function ValleLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <style>{`
        html { font-size: 14px; }
      `}</style>
      
      {/* 1. Hero Section (Nível: Consciente da Solução) */}
      <section className="w-full bg-white pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Coluna Esquerda (Copy) */}
            <div className="flex flex-col items-start text-left z-10">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Proteção veicular completa, sem a burocracia e as letras miúdas das seguradoras.
              </h1>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Cobertura total com mensalidades que cabem no seu bolso. Sem análise de perfil, sem sustos na hora de acionar. Seu carro seguro a partir de hoje.
              </p>
              <a 
                href="https://wa.me/5564992288632" 
                className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Fazer Cotação no WhatsApp (Leva 2 min)
              </a>
            </div>
            
            {/* Coluna Direita (Imagem) */}
            <div className="relative h-[450px] lg:h-[600px] w-full flex items-end justify-center">
              <img 
                src="/humberto_sessao1.png" 
                alt="Especialista Valle Proteção" 
                className="w-full h-auto max-h-full object-contain absolute bottom-0"
              />
              {/* Overlay de Degradê Absoluto para fusão perfeita da base */}
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white via-white to-transparent z-10 opacity-100 pointer-events-none"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Seção de Objeções (Nível: Consciente do Problema) */}
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sabe por que você ainda não protegeu seu carro?
          </h2>
          
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 mt-1 text-red-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-lg text-gray-700">Seguradoras tradicionais cobram fortunas pelo seu CEP.</p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 mt-1 text-red-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-lg text-gray-700">Franquias abusivas que não compensam o acionamento.</p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 mt-1 text-red-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <p className="text-lg text-gray-700">Burocracia interminável para receber a indenização.</p>
            </div>
            
          </div>
          
          <p className="font-medium mt-10 text-center text-xl text-gray-900">
            Na Valle, nós invertemos essa lógica. A proteção é para o carro, não para o seu perfil.
          </p>
        </div>
      </section>

      {/* 3. Seção de Vídeo (Background Cinematic) */}
      <section className="relative w-full py-32 md:py-48 overflow-hidden flex items-center justify-center">
        {/* Vídeo de Fundo */}
        <video 
          src="/video_seguranca.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        />
        
        {/* Overlay Azul/Escuro Premium */}
        <div className="absolute inset-0 bg-[#0A1F44]/75 z-10"></div>
        
        {/* Conteúdo */}
        <div className="relative z-20 max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight flex items-center justify-center gap-4 flex-wrap drop-shadow-2xl">
            Dirija com a segurança da
            <img 
              src="/logo Valle pdf 2.pdf.png" 
              alt="Valle" 
              className="h-[1.1em] w-auto translate-y-1 rounded-lg"
            />
          </h2>
        </div>
      </section>

      {/* 4. Bento Box de Benefícios (Nível: Consciente do Produto) */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Tudo que você precisa. Nada que você não usa.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 - Assimetria (ocupa 2 colunas no desktop) */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
              <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Roubo e Furto</h3>
              <p className="text-gray-600 leading-relaxed">Indenização de 100% da tabela FIPE.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Assistência 24h</h3>
              <p className="text-gray-600 leading-relaxed">Pane, colisão ou pneu furado? A gente te busca.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perda Total e Colisão</h3>
              <p className="text-gray-600 leading-relaxed">Cobertura para você e para terceiros.</p>
            </div>

            {/* Card 4 - Assimetria (ocupa 2 colunas no desktop) */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
              <div className="w-12 h-12 bg-gray-50 text-gray-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sem Análise de Perfil</h3>
              <p className="text-gray-600 leading-relaxed">O valor é o mesmo, não importa sua idade ou onde mora.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. Sobre/Autoridade */}
      {/* 4. Sobre/Autoridade */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24 overflow-hidden">
        <style>{`
          @keyframes float-icon-1 {
            0%, 100% { transform: rotate(-12deg) translateY(0px); }
            50% { transform: rotate(-12deg) translateY(-15px); }
          }
          @keyframes float-icon-2 {
            0%, 100% { transform: rotate(12deg) translateY(0px); }
            50% { transform: rotate(12deg) translateY(-20px); }
          }
          .anim-float-1 { animation: float-icon-1 6s ease-in-out infinite; }
          .anim-float-2 { animation: float-icon-2 8s ease-in-out infinite; }
        `}</style>
        {/* 
          ÍCONES FLUTUANTES - CONTROLE DE POSIÇÃO 
          Mude os valores de top, left, bottom, right dentro do "style={...}" para reposicioná-los. 
        */}
        <img 
          src="/icone_valle.png" 
          alt="" 
          aria-hidden="true"
          className="absolute w-32 md:w-40 opacity-100 blur-[2px] pointer-events-none z-0 anim-float-1"
          style={{ top: '15%', left: '10%' }}
        />
        <img 
          src="/icone_valle.png" 
          alt="" 
          aria-hidden="true"
          className="absolute w-48 md:w-56 opacity-100 blur-[4px] pointer-events-none z-0 anim-float-2"
          style={{ bottom: '18%', right: '10%' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto w-full px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Nascemos para mudar o mercado.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            <span className="text-blue-600 font-semibold">Mais de 10.000 associados</span> já descobriram que é possível ter um <span className="text-blue-600 font-semibold">veículo totalmente protegido</span> pagando um <span className="text-blue-600 font-semibold">preço justo</span>. Nossa associação não visa o lucro predatório, mas sim a <span className="text-blue-600 font-semibold">força do coletivo</span> para proteger o seu patrimônio.
          </p>
          <a 
            href="https://wa.me/5564992288632" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform hover:scale-105 inline-block"
          >
            Proteja seu Veículo
          </a>
        </div>
      </section>

      {/* 5. CTA Final (Fundo do Funil) */}
      <section className="w-full bg-blue-900 py-20 text-center">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Falta apenas um clique para você dirigir sem medo.
          </h2>
          <p className="text-blue-100 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Fale com nossos especialistas agora e descubra o valor exato do seu plano.
          </p>
          <a 
            href="https://wa.me/5564992288632" 
            className="mt-10 bg-green-500 hover:bg-green-400 text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg transition-transform hover:scale-105 inline-block"
          >
            Simular Meu Plano Agora
          </a>
        </div>
      </section>
      
    </div>
  );
}

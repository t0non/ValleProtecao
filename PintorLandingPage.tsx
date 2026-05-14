import React from 'react';
import { Shield, Star, Clock, ArrowRight, Instagram, MessageCircle } from 'lucide-react';

export default function PintorLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* 1. Hero Section (Foco na Confiança e no Visual) */}
      <section className="w-full bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Coluna Esquerda (Copy) */}
            <div className="flex flex-col items-start text-left z-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold tracking-wide mb-6">
                Atendimento em toda BH e Região Centro-Sul
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
                Pintura e Acabamento Premium sem dor de cabeça para a sua casa.
              </h1>
              <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                Especialista em efeitos decorativos (Marmorato, Cimento Queimado e Velvet) com 15 anos de experiência. Proteção total dos seus móveis e zelo absoluto pelo seu espaço.
              </p>
              <a 
                href="https://wa.me/5564992288632" 
                className="mt-10 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
            
            {/* Coluna Direita (Imagem) */}
            <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl bg-gray-200 overflow-hidden shadow-2xl">
              {/* Placeholder para foto de ambiente com Cimento Queimado */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                [Foto de Ambiente com Cimento Queimado]
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. Seção de Diferenciais (Quebrando a objeção do 'Pintor Sujão') */}
      <section className="w-full bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Por que clientes exigentes me escolhem?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proteção Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Isolamento completo de móveis e pisos antes da primeira gota de tinta.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Garantia Estendida</h3>
              <p className="text-gray-600 leading-relaxed">
                Minha mão de obra acompanha a garantia de fábrica das melhores tintas (Coral, Suvinil, Sherwin-Williams).
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">15 Anos de Experiência</h3>
              <p className="text-gray-600 leading-relaxed">
                Acabamento impecável e entrega sem enrolação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bento Grid de Serviços */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Especialidades que transformam ambientes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Principal */}
            <div className="bg-gray-900 text-white p-8 md:p-12 rounded-[2rem] lg:col-span-2 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Efeitos Decorativos</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  Cimento Queimado, Marmorato, Efeito Velvet e Grafiato. O toque de sofisticação que seu ambiente merece.
                </p>
              </div>
            </div>
            
            {/* Card Secundário 1 */}
            <div className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-[2rem] flex flex-col justify-center hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pintura Interna e Externa</h3>
              <p className="text-gray-600 leading-relaxed">
                Cores sólidas e massa corrida/acrílica com nivelamento perfeito.
              </p>
            </div>
            
            {/* Card Secundário 2 */}
            <div className="bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-[2rem] lg:col-span-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-gray-100 transition-colors duration-300">
              <div className="max-w-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fachadas e Áreas Comerciais</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Trabalho seguro com andaimes e tintas de alta durabilidade (Epóxi).
                </p>
              </div>
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <ArrowRight className="w-6 h-6 text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Como Funciona */}
      <section className="w-full bg-gray-50 py-20 md:py-32">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Orçamento rápido e sem compromisso
            </h2>
          </div>
          
          <div className="relative">
            {/* Linha conectora (desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {/* Passo 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-xl ring-8 ring-gray-50">
                  1
                </div>
                <p className="text-lg text-gray-700 font-medium max-w-xs">
                  Você manda uma foto ou vídeo do ambiente pelo WhatsApp.
                </p>
              </div>
              
              {/* Passo 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-xl ring-8 ring-gray-50">
                  2
                </div>
                <p className="text-lg text-gray-700 font-medium max-w-xs">
                  Eu avalio a metragem e o tipo de serviço necessário.
                </p>
              </div>
              
              {/* Passo 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-xl ring-8 ring-gray-50">
                  3
                </div>
                <p className="text-lg text-gray-700 font-medium max-w-xs">
                  Envio o orçamento detalhado. Se preferir, também faço visita técnica presencial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Prova Social e Galeria */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto w-full px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                Mais de 15 anos de resultados reais.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acompanhe meu trabalho diário e os depoimentos de centenas de clientes satisfeitos na Região Centro-Sul.
              </p>
            </div>
            <a 
              href="#instagram" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-200 rounded-full font-semibold text-gray-900 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 shrink-0"
            >
              <Instagram className="w-5 h-5" />
              Ver portfólio no Instagram
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Imagem 1 */}
            <div className="aspect-[4/5] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 font-medium overflow-hidden relative">
              <span>[Antes e Depois 1]</span>
            </div>
            {/* Imagem 2 */}
            <div className="aspect-[4/5] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 font-medium overflow-hidden relative">
              <span>[Antes e Depois 2]</span>
            </div>
            {/* Imagem 3 */}
            <div className="aspect-[4/5] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-500 font-medium overflow-hidden relative">
              <span>[Antes e Depois 3]</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Final */}
      <section className="w-full bg-gray-900 py-24 md:py-32 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
            Pronto para renovar seu espaço com qualidade?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            Envie uma foto do seu ambiente agora e receba uma estimativa rápida pelo WhatsApp.
          </p>
          <a 
            href="https://wa.me/5564992288632" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-5 px-10 rounded-full text-lg shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com o Especialista (WhatsApp)
          </a>
        </div>
      </section>
      
    </div>
  );
}

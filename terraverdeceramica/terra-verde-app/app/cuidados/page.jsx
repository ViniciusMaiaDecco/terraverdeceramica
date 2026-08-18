"use client";

import { useState } from 'react';
import Link from 'next/link';
import Menu from '../menu';

export default function Cuidados() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#FFF] w-full min-h-screen flex flex-col items-center">
      {/* Container principal centralizado - max 396px */}
      <div className="w-full flex flex-col relative bg-[#FFF] min-h-screen">

        {/* Menu Hambúrguer Lateral */}
        {menuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setMenuOpen(false)}></div>
            <div className="absolute left-0 top-0 w-full h-full z-50">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-8 z-50 text-[#F2EDE7] hover:text-white text-3xl font-bold cursor-pointer bg-transparent border-0"
              >
                ✕
              </button>
              <Menu />
            </div>
          </div>
        )}

        {/* ====== CABEÇALHO (Sticky) ====== */}
        <div className="sticky top-0 w-full z-50 flex items-center justify-between px-[27px] h-[91px] bg-[#726D48]/[0.76] backdrop-blur-sm">
          {/* Menu Hambúrguer (Branco) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer bg-transparent border-0 p-0 flex items-center justify-center w-10 h-10 hover:opacity-80"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo Central (Com texto em branco) */}
          <Link href="/">
            <img
              src="/LogoSemFundoBranco2.png"
              alt="Terra Verde Cerâmicas"
              className="w-[70px] object-contain cursor-pointer"
            />
          </Link>

          {/* Sacola de Compras (Branca) */}
          <button className="cursor-pointer bg-transparent border-0 p-0 flex items-center justify-center w-10 h-10 hover:opacity-80">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46992 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ====== HERO: CUIDADOS ====== */}
        <div className="w-full relative mt-[-91px]">
          <img src="/Cuidados_Hero.png" className="w-full h-auto block object-cover" alt="Cuidados com sua peça" />
          <div className="absolute inset-0 bg-black/10"></div>
          <h1 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF] font-cormorantGaramond text-[24px] font-bold tracking-widest uppercase whitespace-nowrap text-center"
            style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
          >
            CUIDADOS COM SUA PEÇA
          </h1>
        </div>

        {/* ====== CONTEÚDO TEXTUAL 1 e FOTO MEIO CORTE ====== */}
        <div className="w-full bg-[#FFF] pt-[50px] pb-[40px] flex flex-col gap-[30px]">
          <div className="px-[30px]">
            <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
              Cada peça da Terra Verde Cerâmicas é produzida artesanalmente e merece alguns cuidados especiais para preservar sua beleza e durabilidade.
            </p>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="pl-[30px] pr-[15px] w-[55%]">
              <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
                Antes do uso, recomendamos sempre verificar a descrição do produto para identificar se a peça é destinada exclusivamente à decoração ou se possui função utilitária para servir alimentos e bebidas.
              </p>
            </div>
            <div className="w-[45%] flex justify-end">
              <img src="/Cuidados_Horse.png" className="w-full h-[260px] object-cover rounded-tl-[120px] rounded-bl-[120px]" alt="Peça Decorativa Cavalo" />
            </div>
          </div>
        </div>

        {/* ====== IMAGEM POT 1 ====== */}
        <img src="/Cuidados_Pot1.png" className="w-full h-auto block" alt="Copo Cerâmica" />

        {/* ====== CONTEÚDO TEXTUAL 2 ====== */}
        <div className="w-full bg-[#FFF] px-[30px] py-[40px]">
          <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
            Nossas peças utilitárias podem ser utilizadas com segurança em micro-ondas e lava-louças. Com o passar do tempo, pode ocorrer o surgimento de craquelados naturais no esmalte, característica comum em algumas cerâmicas artesanais. Para retardar esse processo, evite deixar a peça imersa por longos períodos em líquidos ou resíduos de alimentos e realize a limpeza logo após o uso.
          </p>
        </div>

        {/* ====== IMAGEM CAIXA ====== */}
        <img src="/Cuidados_Box.png" className="w-full h-auto block" alt="Embalagem Terra Verde" />

        {/* ====== CONTEÚDO TEXTUAL 3 (QUEBRA) ====== */}
        <div className="w-full bg-[#FFF] px-[30px] pt-[50px] pb-[30px] flex flex-col gap-[25px]">
          <h2 className="text-[#5E6649] font-cormorantGaramond text-[26px] font-bold">
            Em caso de quebra
          </h2>
          <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
            Caso sua peça se quebre, recomendamos interromper seu uso para fins alimentícios. Partes maiores podem ser restauradas com adesivos apropriados e reaproveitadas como objetos decorativos, porta-objetos ou itens de organização.
          </p>
          <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
            Já os fragmentos menores podem ser utilizados na drenagem de vasos de plantas ou destinados a projetos de mosaico e artesanato.
          </p>
        </div>

        {/* ====== IMAGEM BLUE BOWL (CENTRALIZADA COM BORDAS ARREDONDADAS) ====== */}
        <div className="w-full bg-[#FFF] px-[30px] pb-[30px] flex justify-center">
          <img src="/Cuidados_BlueBowl.png" className="w-[200px] h-auto object-cover rounded-[15px]" alt="Tigela Quebrada" />
        </div>

        {/* ====== CONTEÚDO TEXTUAL 4 ====== */}
        <div className="w-full bg-[#FFF] px-[30px] pb-[40px]">
          <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
            Se optar pelo descarte completo, procure destiná-la junto a resíduos de construção civil ou em pontos de coleta apropriados para esse tipo de material.
          </p>
        </div>

        {/* ====== IMAGEM POT 2 ====== */}
        <img src="/Cuidados_Pot2.png" className="w-full h-auto block" alt="Vaso Cerâmica" />

        {/* ====== CONTEÚDO TEXTUAL 5 ====== */}
        <div className="w-full bg-[#FFF] px-[30px] py-[40px]">
          <p className="text-[#5E6649] font-montserrat text-[15px] font-light leading-[1.6] text-justify">
            Cuidar da sua peça é também uma forma de valorizar o trabalho artesanal, a matéria-prima e a história que cada criação carrega.
          </p>
        </div>

      </div> {/* Fim do container w-full */}

      {/* ====== FOOTER (Ocupando tela toda) ====== */}
      <div className="w-full flex flex-col">
        
        {/* Seção LOJA */}
        <div className="bg-[#726D48] w-full flex justify-center">
          <div className="w-full px-[30px] py-[35px] flex justify-between items-start">
            <div className="flex flex-col gap-[8px]">
              <p 
                className="text-[#A8B59B] font-cormorantGaramond text-[32px] font-bold tracking-wider mb-[6px]"
                style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
              >
                LOJA
              </p>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Bolws</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Pratos</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Centro de Mesa</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Copos & Canecas</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Linha Horse</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Linha Natureza</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Outros</Link>
              <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Tudo</Link>
            </div>
            {/* Logo Completa (com texto) alinhada mais acima */}
            <img
              src="/LogoSemFundoBranco2.png"
              className="w-[100px] object-contain opacity-90 mt-[45px]"
              alt="Terra Verde Logo"
            />
          </div>
        </div>

        {/* Seção HOME */}
        <div className="bg-[#A8B59B] w-full flex justify-center">
          <div className="w-full px-[30px] py-[40px] flex justify-between items-start">
            {/* Logo Árvore (sketch line-art) */}
            <img
              src="/IconsPretoEBranco1.png"
              className="w-[110px] object-contain opacity-90"
              alt="Terra Verde Logo Árvore"
            />
            <div className="flex flex-col gap-[8px] w-[130px]">
              <p 
                className="text-[#F2EDE7] font-cormorantGaramond text-[32px] font-bold tracking-wider mb-[6px]"
                style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.2)' }}
              >
                HOME
              </p>
              <Link href="/sobre" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Sobre</Link>
              <Link href="/onde" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Onde</Link>
              <Link href="/contato" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Contato</Link>
              <Link href="/cuidados" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Cuidados</Link>
            </div>
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="bg-[#F2EDE7] w-full flex justify-center border-t border-gray-100">
          <div className="w-full px-[30px] py-[30px]">
            <p className="text-[#5E6649] font-cormorantGaramond text-[24px] font-semibold mb-[20px]">
              Formas de Pagamento
            </p>
            <div className="flex items-center gap-[10px] mt-[10px]">
                <img src="/Icons8foto601.png" className="h-[23px] w-[23px] object-contain" alt="Pix" />
                <img src="/Icons8visa1001.png" className="h-[23px] w-[23px] object-contain" alt="Visa" />
                <img src="/FormasDePagImg.png" className="h-[23px] object-contain" alt="Mastercard" />
                <img src="/FormasDePagImg1.png" className="h-[23px] object-contain" alt="Elo" />
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-[100px] mb-[10px]">
              <p className="text-[#5E6649] font-montserrat text-sm font-medium">
                TerraVerdeCerâmicas
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[16px] h-[16px] overflow-hidden"
              >
                <path
                  d="M10.5 2.1C5.86 2.1 2.1 5.86 2.1 10.5s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4S15.14 2.1 10.5 2.1zm0 15c-3.64 0-6.6-2.96-6.6-6.6s2.96-6.6 6.6-6.6 6.6 2.96 6.6 6.6-2.96 6.6-6.6 6.6zm-1.8-6.6c0-1.65 1.35-3 3-3 1.1 0 2.07.6 2.57 1.5l-1.34.8c-.28-.5-.77-.8-1.23-.8-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.46 0 .95-.3 1.23-.8l1.34.8c-.5.9-1.47 1.5-2.57 1.5-1.65 0-3-1.35-3-3z"
                  fill="#5E6649"
                />
              </svg>
              <p className="text-[#5E6649] font-montserrat text-sm font-medium">
                2026
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

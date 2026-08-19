'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Menu({ onClose }) {
  // Fecha o menu ao pressionar Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    /* Overlay escuro — clique fora fecha */
    <div
      className="fixed inset-0 z-[200] flex"
      onClick={onClose}
    >
      {/* Gaveta lateral — para o clique não propagar para o overlay */}
      <div
        className="relative w-[220px] h-full flex flex-col shadow-2xl overflow-y-auto bg-[#726D48] animate-slideIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar menu"
          className="absolute right-4 top-5 z-50 text-[#F2EDE7] hover:text-white text-2xl font-bold cursor-pointer bg-transparent border-0 leading-none"
        >
          ✕
        </button>

        {/* Seção Loja */}
        <div className="bg-[#726D48] flex flex-col pt-[40px] pb-[25px] px-[20px]">
          <h2
            className="text-[#A8B59B] font-cormorantGaramond text-3xl font-bold mb-[18px]"
            style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
          >
            Loja
          </h2>
          <div className="flex flex-col gap-[10px]">
            <Link href="/bowls" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Bowls</Link>
            <Link href="/pratos-e-tigelas" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Pratos &amp; Tigelas</Link>
            <Link href="/linha-centro-de-mesa" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Centro de Mesa</Link>
            <Link href="/linha-copos-e-canecas" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Copos &amp; Canecas</Link>
            <Link href="/linha-horse" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Linha Horses</Link>
            <Link href="/linha-natureza" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Linha Natureza</Link>
            <Link href="/outros" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Outros</Link>
            <Link href="/todos-os-produtos" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Tudo</Link>
          </div>
        </div>

        {/* Seção Home */}
        <div className="bg-[#A8B59B] flex flex-col pt-[20px] pb-[30px] px-[20px]">
          <Link href="/" onClick={onClose}>
            <h2
              className="text-[#F2EDE7] font-cormorantGaramond text-3xl font-bold mb-[18px] cursor-pointer hover:underline"
              style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.2)' }}
            >
              Home
            </h2>
          </Link>
          <div className="flex flex-col gap-[10px]">
            <Link href="/sobre" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Sobre</Link>
            <Link href="/onde" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Onde</Link>
            <Link href="/contato" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Contato</Link>
            <Link href="/cuidados" onClick={onClose} className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Cuidados</Link>
          </div>
        </div>

        {/* Seção Inferior (Logo e Redes Sociais) */}
        <div className="bg-[#726D48] flex flex-col flex-grow items-center justify-end pb-[20px]">
          <img
            src="/LogoSemFundoBranco2.png"
            alt="Terra Verde Cerâmicas"
            className="w-[110px] object-contain mb-[15px]"
          />
          <p className="text-[#F2EDE7] font-montserrat text-[14px]">
            @terraverdeceramicas
          </p>
        </div>
      </div>

      {/* Área clicável fora da gaveta (ocupa o restante da tela) */}
      <div className="flex-1 h-full bg-black/40 backdrop-blur-[2px]" />
    </div>
  );
}

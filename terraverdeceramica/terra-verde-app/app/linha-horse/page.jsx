"use client";

import { useState } from 'react';
import Link from 'next/link';
import Menu from '../menu';

export default function LinhaHorse() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F2EDE7] w-full min-h-screen flex flex-col items-center">
      <div className="w-full flex flex-col relative bg-[#F2EDE7] min-h-screen">

        {/* Menu Hamburguer Lateral */}
        {menuOpen && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setMenuOpen(false)}></div>
            <div className="absolute left-0 top-0 w-full h-full z-50">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-8 z-50 text-[#F2EDE7] hover:text-white text-3xl font-bold cursor-pointer bg-transparent border-0"
              >
                ×
              </button>
              <Menu />
            </div>
          </div>
        )}
        {/*mudança*/}
        {/* CABECALHO */}
        <div className="sticky top-0 w-full z-50 flex items-center justify-between px-[27px] h-[91px] bg-[#726D48]/[0.76] backdrop-blur-sm">
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

          <Link href="/">
            <img
              src="/LogoSemFundoBranco2.png"
              alt="Terra Verde Ceramicas"
              className="w-[70px] object-contain cursor-pointer"
            />
          </Link>

          <button className="cursor-pointer bg-transparent border-0 p-0 flex items-center justify-center w-10 h-10 hover:opacity-80">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46992 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* HERO */}
        <div className="w-full relative" style={{ aspectRatio: '396/420' }}>
          <img
            src="/ImgHorses.png"
            className="w-full h-full object-cover absolute left-0 top-0"
            alt="Linha Horses"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1
              className="text-[#F2EDE7] font-cormorantGaramond text-[48px] font-semibold text-center leading-[1.1] tracking-wide"
              style={{ textShadow: '0px 2px 8px rgba(0,0,0,0.5)' }}
            >
              LINHA
              <br />
              HORSES
            </h1>
          </div>
        </div>

        {/* SECAO DESCRITIVA */}
        <div className="w-full flex flex-row items-start px-[20px] py-[28px] gap-[16px] bg-[#F2EDE7]">
          <div className="flex-shrink-0 w-[130px]">
            <img
              src="/ImgPratoCavalo.png"
              className="w-full rounded-[12px] object-cover"
              style={{ aspectRatio: '1/1' }}
              alt="Prato Cavalo"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[#5E6649] font-cormorantGaramond text-[15px] leading-[1.6]">
              Inspirada na forca e na liberdade dos cavalos, a Linha Horses traduz em ceramica a beleza da vida em movimento. Uma homenagem a natureza, aos animais e a emocao que eles despertam em nossa alma.
            </p>
          </div>
        </div>

        {/* GRID DE PRODUTOS */}
        <div className="w-full bg-[#F2EDE7] px-[20px] pb-[30px]">
          <div className="grid grid-cols-2 gap-x-[16px] gap-y-[24px]">

            <div className="flex flex-col">
              <img
                src="/ImgPratoHorseVerde.png"
                className="w-full rounded-[12px] object-cover"
                style={{ aspectRatio: '1/1' }}
                alt="Prato Verde Horse"
              />
              <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Prato Verde Horse</p>
              <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
            </div>

            <div className="flex flex-col">
              <img
                src="/ImgPratoCavalo.png"
                className="w-full rounded-[12px] object-cover"
                style={{ aspectRatio: '1/1' }}
                alt="Prato Cavalo"
              />
              <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Prato Cavalo</p>
              <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
            </div>

            <div className="flex flex-col">
              <img
                src="/ImgComboHorse.png"
                className="w-full rounded-[12px] object-cover"
                style={{ aspectRatio: '1/1' }}
                alt="Combo Prato + Artigos"
              />
              <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Combo Prato + Artigos</p>
              <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$250,00</p>
            </div>

            <div className="flex flex-col">
              <img
                src="/ImgGorseBrown.png"
                className="w-full rounded-[12px] object-cover"
                style={{ aspectRatio: '1/1' }}
                alt="Prato Cavalo Marrom"
              />
              <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Prato Cavalo Marrom</p>
              <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="w-full flex flex-col mt-auto">

          <div className="bg-[#726D48] w-full flex justify-center">
            <div className="w-full px-[30px] py-[35px] flex justify-between items-start">
              <div className="flex flex-col gap-[8px]">
                <p className="text-[#A8B59B] font-cormorantGaramond text-[32px] font-bold tracking-wider mb-[6px]" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}>
                  LOJA
                </p>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Bolws</Link>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Pratos</Link>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Centro de Mesa</Link>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Copos &amp; Canecas</Link>
                <Link href="/linha-horse" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Linha Horse</Link>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Linha Natureza</Link>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Outros</Link>
                <Link href="/" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Tudo</Link>
              </div>
              <img src="/LogoSemFundoBranco2.png" className="w-[100px] object-contain opacity-90 mt-[45px]" alt="Terra Verde Logo" />
            </div>
          </div>

          <div className="bg-[#A8B59B] w-full flex justify-center">
            <div className="w-full px-[30px] py-[40px] flex justify-between items-start">
              <img src="/IconsPretoEBranco1.png" className="w-[110px] object-contain opacity-90" alt="Terra Verde Logo Arvore" />
              <div className="flex flex-col gap-[8px] w-[130px]">
                <p className="text-[#F2EDE7] font-cormorantGaramond text-[32px] font-bold tracking-wider mb-[6px]" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.2)' }}>
                  HOME
                </p>
                <Link href="/sobre" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Sobre</Link>
                <Link href="/onde" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Onde</Link>
                <Link href="/contato" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Contato</Link>
                <Link href="/cuidados" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Cuidados</Link>
              </div>
            </div>
          </div>

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
                <p className="text-[#5E6649] font-montserrat text-sm font-medium">TerraVerdeCeramicas</p>
                <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] overflow-hidden">
                  <path d="M10.5 2.1C5.86 2.1 2.1 5.86 2.1 10.5s3.76 8.4 8.4 8.4 8.4-3.76 8.4-8.4S15.14 2.1 10.5 2.1zm0 15c-3.64 0-6.6-2.96-6.6-6.6s2.96-6.6 6.6-6.6 6.6 2.96 6.6 6.6-2.96 6.6-6.6 6.6zm-1.8-6.6c0-1.65 1.35-3 3-3 1.1 0 2.07.6 2.57 1.5l-1.34.8c-.28-.5-.77-.8-1.23-.8-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.46 0 .95-.3 1.23-.8l1.34.8c-.5.9-1.47 1.5-2.57 1.5-1.65 0-3-1.35-3-3z" fill="#5E6649" />
                </svg>
                <p className="text-[#5E6649] font-montserrat text-sm font-medium">2026</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

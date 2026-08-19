"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Menu from './menu';

export default function TelaInicial() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [currentProdCarousel1, setCurrentProdCarousel1] = useState(0);
  const [currentProdCarousel2, setCurrentProdCarousel2] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchTarget = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = useCallback((e, target) => {
    touchStartX.current = e.touches[0].clientX;
    touchTarget.current = target;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (touchTarget.current === 'banner') {
        if (diff > 0) {
          setCurrentBanner((prev) => (prev + 1) % 4);
        } else {
          setCurrentBanner((prev) => (prev - 1 + 4) % 4);
        }
      } else if (touchTarget.current === 'prod1') {
        setCurrentProdCarousel1((prev) => (prev === 0 ? 1 : 0));
      } else if (touchTarget.current === 'prod2') {
        setCurrentProdCarousel2((prev) => (prev === 0 ? 1 : 0));
      }
    }
    touchTarget.current = null;
  }, []);

  return (
    <div className="bg-[#F2EDE7] w-full min-h-screen flex flex-col items-center">
      {/* Container principal centralizado - max 396px */}
      <div className="w-full flex flex-col relative">

        {/* Menu Hambúrguer Lateral */}
        {menuOpen && (
          <Menu onClose={() => setMenuOpen(false)} />
        )}

        {/* ====== CABEÇALHO ====== */}
        <div className="sticky top-0 w-full z-50 flex items-center justify-between px-[27px] h-[125px] bg-[#F2EDE7]">
          {/* Menu Hambúrguer */}
          <button
            onClick={() => setMenuOpen(true)}
            className="cursor-pointer bg-transparent border-0 p-0 flex items-center justify-center w-10 h-10 hover:opacity-80"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="#5E6649" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6H21" stroke="#5E6649" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 18H21" stroke="#5E6649" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Logo Central */}
          <img
            src="/Logo.png"
            alt="Terra Verde Cerâmicas"
            className="w-[100px] h-[115px] object-contain cursor-pointer"
            onClick={() => setCurrentBanner(0)}
          />

          {/* Sacola de Compras */}
          <button className="cursor-pointer bg-transparent border-0 p-0 flex items-center justify-center w-10 h-10 hover:opacity-80">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 8V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V8H20.407C20.806 8 21.0963 8.38472 20.9702 8.76307L18.6369 15.7631C18.4239 16.4023 17.8286 16.8333 17.1558 16.8333H6.84419C6.17144 16.8333 5.57608 16.4023 5.36307 15.7631L3.02981 8.76307C2.9037 8.38472 3.19399 8 3.59302 8H7ZM9 8H15V6H9V8ZM7 10H5.59302L7.25969 15H16.7403L18.407 10H17V11H15V10H9V11H7V10Z" fill="#5E6649" />
            </svg>
          </button>
        </div>

        {/* ====== CARROSSEL PRINCIPAL ====== */}
        <div
          className="w-full overflow-hidden relative"
          style={{ aspectRatio: '396/504' }}
          onTouchStart={(e) => handleTouchStart(e, 'banner')}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ width: '400%', transform: `translateX(-${currentBanner * 25}%)` }}
          >
            {/* Slide 1 */}
            <div className="relative flex-shrink-0 w-1/4 h-full">
              <img src="/ImgPrincipal.png" className="w-full h-full object-cover" alt="Peças autorais - Inspiradas na natureza" />
              <div className="absolute inset-0 flex flex-col items-start px-[56px] pb-[60px]" style={{ paddingTop: '27%' }}>
                <p className="text-[#F2EDE7] font-montserrat text-[15px] mb-1">PEÇAS AUTORAIS</p>
                <p className="text-[#F2EDE7] font-cormorantGaramond text-[45px] leading-[1.05]">Inspiradas na natureza, feitas à mão.</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link href="/" className="rounded-[33px] bg-[#5E6649] w-[260px] h-[54px] flex items-center justify-center cursor-pointer border-0 hover:opacity-90 transition-opacity">
                    <span className="text-[#F2EDE7] font-montserrat text-lg">Conheça a loja</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative flex-shrink-0 w-1/4 h-full">
              <img src="/ImgPrincipal02.png" className="w-full h-full object-cover" alt="Linha Horse" />
              <div className="bg-[rgba(216,198,176,0.24)] absolute inset-0"></div>
              <div className="absolute inset-0 flex flex-col items-start px-[56px] pb-[60px]" style={{ paddingTop: '27%' }}>
                <p className="text-[#F2EDE7] font-montserrat text-[15px] mb-1">PEÇAS AUTORAIS</p>
                <p className="text-[#F2EDE7] font-cormorantGaramond text-[45px] leading-[1.05]">A essência dos cavalos em peças únicas.</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link href="/linha-horse" className="rounded-[33px] bg-[#5E6649] w-[260px] h-[54px] flex items-center justify-center cursor-pointer border-0 hover:opacity-90 transition-opacity">
                    <span className="text-[#F2EDE7] font-montserrat text-lg">Linha Horse</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="relative flex-shrink-0 w-1/4 h-full">
              <img src="/ImgPrincipal03.png" className="w-full h-full object-cover" alt="Linha Natureza" />
              <div className="bg-[rgba(168,181,155,0.34)] absolute inset-0"></div>
              <div className="absolute inset-0 flex flex-col items-start px-[56px] pb-[60px]" style={{ paddingTop: '27%' }}>
                <p className="text-[#F2EDE7] font-montserrat text-[15px] mb-1">PEÇAS AUTORAIS</p>
                <p className="text-[#F2EDE7] font-cormorantGaramond text-[45px] leading-[1.05]">Texturas, formas e cores inspiradas pela natureza.</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link href="/linha-natureza" className="rounded-[33px] bg-[#5E6649] w-[260px] h-[54px] flex items-center justify-center cursor-pointer border-0 hover:opacity-90 transition-opacity">
                    <span className="text-[#F2EDE7] font-montserrat text-lg">Linha Natureza</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="relative flex-shrink-0 w-1/4 h-full">
              <img src="/ImgPrincipal04.png" className="w-full h-full object-cover" alt="Conheça a loja" />
              <div className="bg-[rgba(216,198,176,0.24)] absolute inset-0"></div>
              <div className="absolute inset-0 flex flex-col items-start px-[56px] pb-[60px]" style={{ paddingTop: '27%' }}>
                <p className="text-[#F2EDE7] font-montserrat text-[15px] mb-1">PEÇAS AUTORAIS</p>
                <p className="text-[#F2EDE7] font-cormorantGaramond text-[45px] leading-[1.05]">A simplicidade da argila em sua forma mais pura!</p>
                <div className="mt-auto w-full flex justify-center">
                  <Link href="/" className="rounded-[33px] bg-[#5E6649] w-[260px] h-[54px] flex items-center justify-center cursor-pointer border-0 hover:opacity-90 transition-opacity">
                    <span className="text-[#F2EDE7] font-montserrat text-lg">Conheça a loja</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores (dots) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-[8px] z-10">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentBanner(i)}
                className={`rounded-full w-[15px] h-[15px] border-0 p-0 cursor-pointer transition-colors duration-300 ${currentBanner === i ? 'bg-white' : 'bg-[#B3B0B0]'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* ====== SEÇÃO DE PRODUTOS (fundo bege) ====== */}
        <div className="w-full bg-[#F2EDE7]">

          {/* ====== CARROSSEL DE PRODUTOS 1 ====== */}
          <div
            className="w-full overflow-hidden relative"
            onTouchStart={(e) => handleTouchStart(e, 'prod1')}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: '200%', transform: `translateX(-${currentProdCarousel1 * 50}%)` }}
            >
              {/* Slide 1 */}
              <div className="w-1/2 flex-shrink-0 px-[39px] pt-[15px] pb-[10px]">
                <div className="grid grid-cols-2 gap-x-[25px]">
                  <div className="flex flex-col">
                    <img src="/ImgBowlOceano.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Bowl Oceano" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Bowl Oceano</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/ImgPratoCavalo.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Prato Cavalo" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Prato Cavalo</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="w-1/2 flex-shrink-0 px-[39px] pt-[15px] pb-[10px]">
                <div className="grid grid-cols-2 gap-x-[25px]">
                  <div className="flex flex-col">
                    <img src="/ImgPortaGuardanapo.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Porta Guardanapo" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Porta Guardanapo</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/ImgPotevaso.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Vaso/Pote" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Vaso/Pote</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Seta carrossel 1 */}
            <button
              onClick={() => setCurrentProdCarousel1((prev) => (prev === 0 ? 1 : 0))}
              className="absolute right-[8px] top-1/2 -translate-y-1/2 z-10 cursor-pointer border-0 bg-white/80 hover:bg-white rounded-full w-[36px] h-[36px] flex items-center justify-center shadow-md transition-all duration-300"
              style={{ transform: `translateY(-50%) ${currentProdCarousel1 === 1 ? 'rotate(180deg)' : ''}` }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 10C17.5 10.1184 17.4663 10.2343 17.403 10.3343C17.3396 10.4343 17.2492 10.5143 17.1422 10.5649L5.2672 16.1899C5.19302 16.225 5.11265 16.2452 5.03067 16.2493C4.9487 16.2533 4.86672 16.2412 4.78942 16.2136C4.71212 16.186 4.64102 16.1435 4.58017 16.0884C4.51932 16.0333 4.46992 15.9668 4.43478 15.8926C4.39964 15.8184 4.37945 15.7381 4.37538 15.6561C4.3713 15.5741 4.38341 15.4921 4.41101 15.4148C4.43861 15.3375 4.48117 15.2664 4.53625 15.2056C4.59134 15.1447 4.65787 15.0953 4.73204 15.0602L15.4149 10L4.73282 4.93986C4.65865 4.90472 4.59212 4.85532 4.53704 4.79447C4.48195 4.73362 4.43939 4.66251 4.41179 4.58522C4.38419 4.50792 4.37208 4.42594 4.37616 4.34396C4.38023 4.26199 4.40042 4.18162 4.43556 4.10744C4.4707 4.03326 4.5201 3.96673 4.58095 3.91165C4.64102 3.85657 4.71291 3.81401 4.7902 3.78641C4.8675 3.7588 4.94948 3.74669 5.03146 3.75077C5.11343 3.75485 5.1938 3.77503 5.26798 3.81017L17.143 9.43517C17.2498 9.48589 17.3401 9.56589 17.403 9.66588C17.4665 9.76586 17.5 9.88173 17.5 10Z" fill="#5E6649" />
              </svg>
            </button>
          </div>

          {/* ====== CARROSSEL DE PRODUTOS 2 ====== */}
          <div
            className="w-full overflow-hidden relative"
            onTouchStart={(e) => handleTouchStart(e, 'prod2')}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: '200%', transform: `translateX(-${currentProdCarousel2 * 50}%)` }}
            >
              {/* Slide 1 */}
              <div className="w-1/2 flex-shrink-0 px-[39px] pt-[15px] pb-[10px]">
                <div className="grid grid-cols-2 gap-x-[25px]">
                  <div className="flex flex-col">
                    <img src="/ImgPratoAzul.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Prato Orgânico" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Prato Orgânico</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/ImgFolha.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Centro de Mesa Folha" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Centro de Mesa Folha</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="w-1/2 flex-shrink-0 px-[39px] pt-[15px] pb-[10px]">
                <div className="grid grid-cols-2 gap-x-[25px]">
                  <div className="flex flex-col">
                    <img src="/ImgBowlFolha.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Bowl Esverdeado" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Bowl Esverdeado</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                  <div className="flex flex-col">
                    <img src="/ImgIncensarioFolha.png" className="rounded-[15px] w-full aspect-square object-cover" alt="Incensário Folha" />
                    <p className="text-[#5E6649] font-montserrat text-xs font-semibold mt-[10px]">Incensário Folha</p>
                    <p className="text-[#846753] font-inter text-xs font-medium mt-[4px]">R$150,00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Seta carrossel 2 */}
            <button
              onClick={() => setCurrentProdCarousel2((prev) => (prev === 0 ? 1 : 0))}
              className="absolute right-[8px] top-1/2 -translate-y-1/2 z-10 cursor-pointer border-0 bg-white/80 hover:bg-white rounded-full w-[36px] h-[36px] flex items-center justify-center shadow-md transition-all duration-300"
              style={{ transform: `translateY(-50%) ${currentProdCarousel2 === 1 ? 'rotate(180deg)' : ''}` }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 10C17.5 10.1184 17.4663 10.2343 17.403 10.3343C17.3396 10.4343 17.2492 10.5143 17.1422 10.5649L5.2672 16.1899C5.19302 16.225 5.11265 16.2452 5.03067 16.2493C4.9487 16.2533 4.86672 16.2412 4.78942 16.2136C4.71212 16.186 4.64102 16.1435 4.58017 16.0884C4.51932 16.0333 4.46992 15.9668 4.43478 15.8926C4.39964 15.8184 4.37945 15.7381 4.37538 15.6561C4.3713 15.5741 4.38341 15.4921 4.41101 15.4148C4.43861 15.3375 4.48117 15.2664 4.53625 15.2056C4.59134 15.1447 4.65787 15.0953 4.73204 15.0602L15.4149 10L4.73282 4.93986C4.65865 4.90472 4.59212 4.85532 4.53704 4.79447C4.48195 4.73362 4.43939 4.66251 4.41179 4.58522C4.38419 4.50792 4.37208 4.42594 4.37616 4.34396C4.38023 4.26199 4.40042 4.18162 4.43556 4.10744C4.4707 4.03326 4.5201 3.96673 4.58095 3.91165C4.64102 3.85657 4.71291 3.81401 4.7902 3.78641C4.8675 3.7588 4.94948 3.74669 5.03146 3.75077C5.11343 3.75485 5.1938 3.77503 5.26798 3.81017L17.143 9.43517C17.2498 9.48589 17.3401 9.56589 17.403 9.66588C17.4665 9.76586 17.5 9.88173 17.5 10Z" fill="#5E6649" />
              </svg>
            </button>
          </div>

          {/* Botão Ver todos */}
          <div className="w-full flex justify-center py-[20px]">
            <Link href="/" className="rounded-[22px] bg-[#5E6649] w-[183px] h-[38px] flex items-center justify-center gap-2 cursor-pointer border-0 hover:opacity-90 transition-opacity">
              <span className="text-[#F2EDE7] font-montserrat text-lg">Ver todos</span>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6894 8.16758L10.9741 15.0323C10.834 15.1755 10.6442 15.2559 10.4462 15.2559C10.2482 15.2559 10.0583 15.1755 9.91825 15.0323C9.77824 14.8892 9.69958 14.6951 9.69958 14.4927C9.69958 14.2903 9.77824 14.0962 9.91825 13.953L15.3605 8.39068H0.746154C0.548261 8.39068 0.358474 8.31032 0.218544 8.16728C0.0786125 8.02423 0 7.83023 0 7.62793C0 7.42564 0.0786125 7.23163 0.218544 7.08859C0.358474 6.94554 0.548261 6.86518 0.746154 6.86518H15.3605L9.91825 1.30282C9.77824 1.1597 9.69958 0.965581 9.69958 0.763175C9.69958 0.560768 9.77824 0.366652 9.91825 0.223529C10.0583 0.0804056 10.2482 0 10.4462 0C10.6442 0 10.834 0.0804056 10.9741 0.223529L17.6894 7.08829C17.7588 7.15912 17.8139 7.24325 17.8514 7.33584C17.889 7.42844 17.9083 7.52769 17.9083 7.62793C17.9083 7.72817 17.889 7.82742 17.8514 7.92002C17.8139 8.01262 17.7588 8.09674 17.6894 8.16758Z" fill="#F2EDE7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ====== SEÇÕES DE CATEGORIAS ====== */}
        <div className="w-full px-[27px] flex flex-col gap-0">
          {/* Natureza */}
          <Link href="/linha-natureza" className="w-full relative block" style={{ aspectRatio: '339/817' }}>
            <img src="/Natureza.png" className="w-full h-full object-cover absolute left-0 top-0" alt="Natureza" />
            <div className="bg-[rgba(168,181,155,0.34)] w-full h-full absolute left-0 top-0 hover:bg-[rgba(168,181,155,0.50)] transition-colors duration-300"></div>
            <p className="text-[#FFFCF9] font-cormorantGaramond text-[45px] absolute left-1/2 top-[45%] -translate-x-1/2">
              Natureza
            </p>
          </Link>

          {/* Horse */}
          <Link href="/linha-horse" className="w-full relative block" style={{ aspectRatio: '339/817' }}>
            <img src="/Horse.png" className="w-full h-full object-cover absolute left-0 top-0" alt="Horse" />
            <div className="bg-[rgba(216,198,176,0.24)] w-full h-full absolute left-0 top-0 hover:bg-[rgba(216,198,176,0.42)] transition-colors duration-300"></div>
            <p className="text-[#FFFCF9] font-cormorantGaramond text-[45px] absolute left-1/2 top-[46%] -translate-x-1/2">
              Horse
            </p>
          </Link>

          {/* Bowls */}
          <Link href="/bowls" className="w-full relative block" style={{ aspectRatio: '339/817' }}>
            <img src="/Bowls.png" className="w-full h-full object-cover absolute left-0 top-0" alt="Bowls" />
            <div className="bg-[rgba(168,181,155,0.34)] w-full h-full absolute left-0 top-0 hover:bg-[rgba(168,181,155,0.50)] transition-colors duration-300"></div>
            <p className="text-[#FFFCF9] font-cormorantGaramond text-[45px] absolute left-1/2 top-[45%] -translate-x-1/2">
              Bowls
            </p>
          </Link>

          {/* Outros */}
          <Link href="/outros" className="w-full relative block" style={{ aspectRatio: '339/819' }}>
            <img src="/Outros.png" className="w-full h-full object-cover absolute left-0 top-0" alt="Outros" />
            <div className="bg-[rgba(216,198,176,0.24)] w-full h-full absolute left-0 top-0 hover:bg-[rgba(216,198,176,0.42)] transition-colors duration-300"></div>
            <p className="text-[#FFFCF9] font-cormorantGaramond text-[45px] absolute left-1/2 top-[46%] -translate-x-1/2">
              Outros
            </p>
          </Link>
        </div> {/* Fim do container w-full */}
        {/* ====== FOOTER ====== */}
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
                <Link href="/bowls" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Bolws</Link>
                <Link href="/pratos-e-tigelas" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Pratos</Link>
                <Link href="/linha-centro-de-mesa" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Centro de Mesa</Link>
                <Link href="/linha-copos-e-canecas" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Copos & Canecas</Link>
                <Link href="/linha-horse" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Linha Horse</Link>
                <Link href="/linha-natureza" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Linha Natureza</Link>
                <Link href="/outros" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Outros</Link>
                <Link href="/todos-os-produtos" className="text-[#F2EDE7] font-montserrat text-[16px] cursor-pointer hover:underline">Tudo</Link>
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
    </div>
  );
}

import Link from 'next/link';

export default function Menu() {
  return (
    <div className="w-[220px] h-full flex flex-col shadow-2xl overflow-y-auto bg-[#726D48]">
      {/* Seção Loja */}
      <div className="bg-[#726D48] flex flex-col pt-[40px] pb-[25px] px-[20px]">
        <h2
          className="text-[#A8B59B] font-cormorantGaramond text-3xl font-bold mb-[18px]"
          style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.3)' }}
        >
          Loja
        </h2>
        <div className="flex flex-col gap-[10px]">
          <Link href="/bowls" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Bolws</Link>
          <Link href="/" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Pratos</Link>
          <Link href="/linha-centrp-de-mesa" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Centro de Mesa</Link>
          <Link href="/linha-copos-e-canecas" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Copos & Canecas</Link>
          <Link href="/linha-horse" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Linha Horses</Link >
          <Link href="/linha-natureza" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Linha Natureza</Link>
          <Link href="/outros" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Outros</Link >
          <Link href="/" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Tudo</Link>
        </div>
      </div>

      {/* Seção Home */}
      <div className="bg-[#A8B59B] flex flex-col pt-[20px] pb-[30px] px-[20px]">
        <Link href="/">
          <h2
            className="text-[#F2EDE7] font-cormorantGaramond text-3xl font-bold mb-[18px] cursor-pointer hover:underline"
            style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.2)' }}
          >
            Home
          </h2>
        </Link>
        <div className="flex flex-col gap-[10px]">
          <Link href="/sobre" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Sobre</Link>
          <Link href="/onde" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Onde</Link>
          <Link href="/contato" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Contato</Link>
          <Link href="/cuidados" className="text-[#F2EDE7] font-montserrat text-lg leading-tight cursor-pointer hover:underline">Cuidados</Link>
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
  );
}

import Image from 'next/image'
import logoImage from '../assets/logo.svg'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="space-y-5">
      <Image src={logoImage} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-2xl font-bold leading-tight text-gray-50 lg:text-5xl">
          Sua cápsula do tempo
        </h1>
        <p className=" mt-1 leading-relaxed lg:text-lg">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        href="#"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
      >
        Cadastrar lembrança
      </Link>
    </div>
  )
}

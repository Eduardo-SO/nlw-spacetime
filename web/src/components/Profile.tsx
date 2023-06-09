import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        alt="User avatar"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-gray-300 hover:text-gray-200"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}

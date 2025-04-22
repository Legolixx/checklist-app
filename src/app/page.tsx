import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Home() {


  const {userId} = await auth()

  if (userId) redirect('/dashboard')

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-2 bg-white">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Hyundai Brasil{' '}
          <span className="text-blue-600">Checklist Veicular</span>
        </h1>

        <p className="mt-4 text-2xl text-gray-700">
          Um aplicativo moderno para gerenciamento de checklists de inspeção veicular
        </p>

        <div className="mt-10 flex max-w-4xl flex-wrap items-center justify-around sm:w-full gap-6">
          <Link
            href="/sign-in"
            className="w-80 rounded-xl border border-gray-300 p-6 text-left hover:border-blue-600 hover:text-blue-600 transition"
          >
            <h3 className="text-2xl font-bold">Entrar &rarr;</h3>
            <p className="mt-4 text-lg">
              Acesse sua conta para gerenciar os checklists veiculares
            </p>
          </Link>

          <Link
            href="/sign-up"
            className="w-80 rounded-xl border border-gray-300 p-6 text-left hover:border-blue-600 hover:text-blue-600 transition"
          >
            <h3 className="text-2xl font-bold">Criar Conta &rarr;</h3>
            <p className="mt-4 text-lg">
              Crie uma conta para começar a usar o aplicativo
            </p>
          </Link>
        </div>
      </main>

      {/* Rodapé com logo e direitos reservados */}
      <footer className="w-full flex flex-col items-center justify-center py-4 border-t mt-12">
        <Image
          src="/Hyundai_logo.png"
          alt="Logo Hyundai"
          width={100}
          height={100}
          className="mb-2"
        />
        <p className="text-sm text-gray-500">
          © 2025 Hyundai Brasil. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

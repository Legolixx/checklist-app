import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { LogoHyundai } from "@/components/LogoFooter";

export default async function Home() {
  const { userId } = await auth();

  if (userId) redirect("/dashboard");

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-2 bg-white dark:bg-gray-900 transition-colors">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Hyundai Brasil{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Portal After Sales
          </span>
        </h1>

        <p className="mt-4 text-2xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Portal para gerenciamento e acompanhamento de processos de Pós-Vendas
          Hyundai.
        </p>

        <div className="mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6">
          <Link
            href="/sign-in"
            className="w-80 rounded-xl border border-gray-300 dark:border-gray-700 p-6 text-left hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors shadow-md hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold">Entrar &rarr;</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Acesse sua conta para gerenciar os processos de Pós-Vendas.
            </p>
          </Link>
        </div>
      </main>

      <footer className="w-full flex flex-col items-center justify-center py-4 border-t border-gray-200 dark:border-gray-700 mt-12">
        <LogoHyundai />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 Hyundai Brasil. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

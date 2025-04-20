import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hyundai Brasil{' '}
          <span className="text-blue-600">
            Vehicle Checklist App
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          A modern application for managing vehicle inspection checklists
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link
            href="/sign-in"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Sign In &rarr;</h3>
            <p className="mt-4 text-xl">
              Access your account to manage vehicle checklists
            </p>
          </Link>

          <Link
            href="/sign-up"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Sign Up &rarr;</h3>
            <p className="mt-4 text-xl">
              Create a new account to start using the application
            </p>
            <UserButton />
          </Link>
        </div>
      </main>
    </div>
  );
}

// app/page.js
export const metadata = {
  title: "Coming soon",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Be right back ✨
        </h1>
        <p className="text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
          Updating something. Come back in a bit.
        </p>
      </div>
    </main>
  );
}

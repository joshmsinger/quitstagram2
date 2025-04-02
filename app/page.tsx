import Head from 'next/head';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Quitstagram</title>
        <meta name="description" content="Preserve your memories. Leave Instagram behind." />
      </Head>

      <h1 className="text-5xl font-bold mb-4">Quitstagram</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Preserve your memories. Leave Instagram behind.
      </p>
      <button
        className="px-6 py-3 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-700"
        type="button"
      >
        Get Started
      </button>
    </div>
  );
}

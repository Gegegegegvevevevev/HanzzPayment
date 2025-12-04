
'use client';
import { useState } from 'react';

export default function Page() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className="flex flex-col items-center p-8 animate-fadeIn">
      <button
        onClick={toggleDark}
        className="mb-6 px-4 py-2 rounded-lg bg-blue-500 text-white">
        Toggle Dark Mode
      </button>

      <div className="w-full max-w-lg p-6 rounded-xl shadow-xl bg-white dark:bg-gray-800 transition transform animate-slideUp">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">Pembayaran Anime Style</h1>

        <p className="dark:text-gray-300 mb-4">Pilih metode pembayaran dengan animasi lembut ala anime.</p>

        <div className="grid grid-cols-3 gap-4">
          {['DANA','GoPay','QRIS'].map((m)=>(
            <div key={m}
              className="p-4 border rounded-xl dark:border-gray-700 hover:scale-105 transition cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-white text-center">
              {m}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="dark:text-gray-200">Upload Bukti Transfer</label>
          <input type="file" className="mt-2 block w-full text-white" />
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
          Kirim Pembayaran
        </button>
      </div>
    </main>
  );
}

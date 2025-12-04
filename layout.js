
export const metadata = { title: 'Anime Payment' };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="dark:bg-gray-900 bg-gray-100 min-h-screen transition">
        {children}
      </body>
    </html>
  );
}

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className='h-screen min-w-[500px]'> 
        {children}
      </body>
    </html>
  );
}

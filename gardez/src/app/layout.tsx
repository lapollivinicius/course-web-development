import './globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className='h-screen bg-blue-300'> 
        {children}
      </body>
    </html>
  );
}

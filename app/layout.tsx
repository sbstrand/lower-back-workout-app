export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Lower Back Workout</title>
      </head>
      <body className="bg-gray-100 text-gray-800 font-sans">{children}</body>
    </html>
  );
}
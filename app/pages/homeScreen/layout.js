
export const metadata = {
  title: "Geo-app Home Screen",
  description: "Home screen for the Geo-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

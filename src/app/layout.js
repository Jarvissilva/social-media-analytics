import "./style.css";

export const metadata = {
  title: "Oauth Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

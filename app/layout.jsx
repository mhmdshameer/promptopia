import "@styles/global.css";

export const metadata = {
  title: "promptopia",
  description: "discover and share AI prompts",
};

const RootLayout = ({children}) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;


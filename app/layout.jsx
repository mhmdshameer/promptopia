import RootLayoutClient from "./RootLayoutClient";

export const metadata = {
  title: "promptopia",
  description: "discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
};

export default RootLayout;

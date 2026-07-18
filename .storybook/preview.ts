import type { Preview } from "@storybook/nextjs-vite";
import "../styles/globals.css";

const preview: Preview = {
  parameters: {
    // Provide a default App Router pathname so components that call
    // usePathname() (SidebarMenu, AccountSidebar, NavLink) render. In the real
    // app usePathname() is never null; in Storybook it is unless set here.
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/account/overview",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;

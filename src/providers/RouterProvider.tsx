import { BrowserRouter } from "react-router";

interface RouterProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component that enables client-side routing functionality using React Router.
 * Wraps child components with BrowserRouter to enable URL-based navigation and routing features.
 *
 * @param {React.ReactNode} children - The child components that will have access to routing context
 * @returns {React.ReactNode} Child components wrapped with React Router's browser routing capabilities
 */
const RouterProvider = ({ children }: RouterProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;

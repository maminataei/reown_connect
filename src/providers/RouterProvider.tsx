import { BrowserRouter } from "react-router";

interface RouterProviderProps {
  children: React.ReactNode;
}

/**
 * @param {React.ReactNode} children - The children to render.
 * @returns {React.ReactNode} The children wrapped in a BrowserRouter.
 */
const RouterProvider = ({ children }: RouterProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterProvider;

import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { MainPage } from "../pages/MainPage";
import { NotFound } from "./NotFound";
import { ContactsPage } from "../pages/СontactsPage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: 'kontakty/',
        element: <ContactsPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
])

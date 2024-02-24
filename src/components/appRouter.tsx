import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { MainPage } from "../pages/MainPage";
import { NotFound } from "./NotFound";
import { ContactsPage } from "../pages/СontactsPage";
import { GalleryPage } from "../pages/GalleryPage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/kontakty/',
        element: <ContactsPage />
      },
      {
        path: '/galereya/',
        element: <GalleryPage />
      },
      {
        path: '/o-nas/'
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
])

import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { MainPage } from "../pages/MainPage";
import { NotFound } from "./NotFound";
import { ContactsPage } from "../pages/СontactsPage";
import { GalleryPage } from "../pages/GalleryPage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { TrainersPage } from "../pages/TrainersPage";
import { ServicesPage } from "../pages/ServicesPage";

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
        path: '/o-nas/',
        element: <AboutUsPage />
      },
      {
        path: '/trenery',
        element: <TrainersPage />
      },
      {
        path: 'uslugi',
        element: <ServicesPage />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
])

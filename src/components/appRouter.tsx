/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";
import { lazy } from "react";

const ContactsPage = lazy(() => import('../pages/СontactsPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const AboutUsPage = lazy(() => import('../pages/AboutUsPage'));
const TrainersPage = lazy(() => import('../pages/TrainersPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

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

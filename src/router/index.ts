import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { groupRoutes } from './utils/groupRoutes';
import { root, notFound } from './routes';

const routes = groupRoutes(root, notFound);

export const router = createBrowserRouter(routes as RouteObject[]);

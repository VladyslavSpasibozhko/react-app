import { RouteObject } from 'react-router-dom';

declare global {
  type Paths = '*' | '/' | '/home';

  type Route = Omit<RouteObject, 'path' | 'children'> & {
    path: Paths;
    children?: Paths[];
  };
}

import { NotFound } from 'src/views/NotFound';
import { ErrorRoute } from 'src/components/ErrorRoute';

export const notFound: Route[] = [
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorRoute />,
  },
];

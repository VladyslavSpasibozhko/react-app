import { Root } from 'src/views/Root';
import { ErrorRoute } from 'src/components/ErrorRoute';

export const root: Route[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorRoute />,
    index: true,
  },
];

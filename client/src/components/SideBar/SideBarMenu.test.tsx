import React from 'react';
import { render } from '@testing-library/react';
import SideBarMenu from './SideBarMenu';

test('renders the SideBarMenu component', () => {
  const { getByText } = render(<SideBarMenu urlPath='www.home24.com' name='home24' />);
  expect(getByText('home24')).toBeInTheDocument();
});

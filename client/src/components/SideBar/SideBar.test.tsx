
import React from 'react';
import { render } from '@testing-library/react';
import { getCategories } from '../../utils/test-utils';

import SideBar from './SideBar';

test('renders the SideBar component', () => {
  const { getByText } = render(<SideBar categories={getCategories()} />);
  expect(getByText('Kategorien')).toBeInTheDocument();
  expect(getByText('Wohnzimmer')).toBeInTheDocument();
  expect(getByText('Schlafzimmer')).toBeInTheDocument();
});
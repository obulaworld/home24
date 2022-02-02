import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

test('renders footer component', () => {
  render(<Footer />);
  expect(screen.getByText('Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.')).toBeInTheDocument();
});

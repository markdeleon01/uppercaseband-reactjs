import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(<Home />);

  // assert main page header
  expect(screen.getByTestId('home-header-1')).toBeInTheDocument();

  // assert secondary page header
  expect(screen.getByTestId('home-header-2')).toBeInTheDocument();

  // assert page components
  expect(screen.getByTestId('home')).toBeInTheDocument();
  expect(screen.getByTestId('band-logo')).toBeInTheDocument();
  expect(screen.getByTestId('page-content')).toBeInTheDocument();
});

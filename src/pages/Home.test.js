import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(<Home />);

  // assert main page header
  const headerElement = screen.getByText(/U P P E R C A S E/i);
  expect(headerElement).toBeInTheDocument();

  // assert secondary page header
  const secondaryHeaderElement = screen.getByText(/Welcome to the Official Website/i);
  expect(secondaryHeaderElement).toBeInTheDocument();
});

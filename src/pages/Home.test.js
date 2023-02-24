import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home', () => {
  render(<Home />);

  // assert main page header
  const headerElement = screen.getByText(/U P P E R C A S E/i);
  expect(headerElement).toBeInTheDocument();
});

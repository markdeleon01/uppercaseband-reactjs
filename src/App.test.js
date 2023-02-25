import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);

  const appDivElement = screen.getByTestId('app')
  expect(appDivElement).toBeInTheDocument();
});

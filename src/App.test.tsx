import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Code 640 home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /premium engineering/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Start a project/i })).toBeInTheDocument();
});

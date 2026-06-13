import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Code 640 home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Full-stack Agency/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument();
});

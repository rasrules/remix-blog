import { render, screen } from '@testing-library/react';
import Index from './routes/_index';
import '@testing-library/jest-dom'; // So we can use toBeInTheDocument assertion


it('should show welcome message', () => {

  render(<Index />);

  expect(
    screen.getByRole('heading', { name: /Welcome to Remix/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', {name: 'Remix Docs'}),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Footer/),
  ).toBeInTheDocument();
});

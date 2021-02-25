import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders form´s headline', () => {
  render(<App />);
  const headline = screen.getByText(/add new product/i);
  expect(headline).toBeInTheDocument();
});

test('renders error when adding an empty product', () => {
  render(<App />);

  fireEvent.click(screen.getByText('Add'));
  const errorMessage = screen.queryByText(/error/);
  expect(errorMessage).toHaveTextContent('There is an error');
});

test('renders no error when the app is just launched', () => {
  render(<App />);

  const errorMessage = screen.queryByText(/error/);
  expect(errorMessage).not.toBeInTheDocument();
});

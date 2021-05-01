import { render, screen } from '@testing-library/react';
import Board from './';

test('renders Board', () => {
  render(<Board />);
  const element = screen.getByText(/Pixel/i);
  expect(element).toBeInTheDocument();
});

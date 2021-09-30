import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// TODO: write basic test cases
test('renders weather app container', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

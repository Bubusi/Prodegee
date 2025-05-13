import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      name: /Vite \+ React \+ Tailwind \+ TypeScript/i,
    });
    expect(heading).toBeInTheDocument();
  });
});

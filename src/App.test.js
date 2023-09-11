import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);//rendering that component
  const linkElement = screen.getByText('Trending Now ');//checking if the component has that data or not
  expect(linkElement).toBeInTheDocument();//what output to be expexcted
});

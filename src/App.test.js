// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Raft title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Raft/i);
    expect(titleElement).toBeInTheDocument();
});

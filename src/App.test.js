import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
test('renders welcome message on HomePage', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const welcomeMessage = screen.getByText(/Welcome to My Personal Profile/i);
  expect(welcomeMessage).toBeInTheDocument();
});

// Test navigation to the AboutPage
test('renders About page content', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <App />
    </MemoryRouter>
  );

  const aboutHeading = screen.getByText(/About Me/i);
  expect(aboutHeading).toBeInTheDocument();
});

// Test navigation to the SkillsPage
test('renders Skills page content', () => {
  render(
    <MemoryRouter initialEntries={['/skills']}>
      <App />
    </MemoryRouter>
  );

  const skillsHeading = screen.getByText(/My Skills/i);
  expect(skillsHeading).toBeInTheDocument();
});

// Test navigation to the ContactPage
test('renders Contact page content', () => {
  render(
    <MemoryRouter initialEntries={['/contact']}>
      <App />
    </MemoryRouter>
  );

  const contactHeading = screen.getByText(/Contact Me/i);
  expect(contactHeading).toBeInTheDocument();
});

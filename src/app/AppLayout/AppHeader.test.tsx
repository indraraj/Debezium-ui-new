import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('should render the logo', () => {
    it('should render the logo', () => {
      render(<AppHeader updateCluster={() => {}} />);
      const logo = screen.getByAltText('Patterfly Logo');
      expect(logo).toBeInTheDocument();
    });

    it('should render the toggle button', () => {
      render(<AppHeader updateCluster={() => {}} />);
      const toggleButton = screen.getByRole('button', { name: 'Global navigation' });
      expect(toggleButton).toBeInTheDocument();
    });

    it('should call toggleSidebar when the toggle button is clicked', () => {
      const toggleSidebar = jest.fn();
      render(<AppHeader updateCluster={() => {}} />);
      const toggleButton = screen.getByRole('button', { name: 'Global navigation' });
      userEvent.click(toggleButton);
      expect(toggleSidebar).toHaveBeenCalled();
    });
  });
});

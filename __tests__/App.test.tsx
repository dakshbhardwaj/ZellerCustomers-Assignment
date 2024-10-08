/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { describe, it } from '@jest/globals';
import { render, waitFor } from '@testing-library/react-native';

describe('App Component', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<App />);
    
    expect(getByText(/loading/i)).toBeTruthy();
    
    await waitFor(() => {
      expect(getByText('Main Content')).toBeTruthy(); 
    });
  });

  it('handles errors correctly', async () => {
    const { getByText } = render(<App />);

    
    await waitFor(() => {
      expect(getByText('Error loading data')).toBeTruthy(); 
    });
  });
});


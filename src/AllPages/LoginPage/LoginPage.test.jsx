import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import LoginPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Login Page', () => {
  beforeEach(() => {
   
    render(  <BrowserRouter> <LoginPage /> </BrowserRouter>)
  })

  afterEach(() => {
    cleanup()
  })
  
  it('h2 displays Login to Get Started!', () => {
    const h2 = screen.getByText('Login to Get Started!');
    expect(h2).toBeInTheDocument();
  })

  it('displays a p tag with Enter your Email and Password'), () => {
    const p = screen.getByText('Enter your Email and Password');
    expect(p).toBeInTheDocument();
  }

  it('renders an email input', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  })

  it('renders a password input', () => {
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  })
})
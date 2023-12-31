import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);
import { BrowserRouter } from 'react-router-dom';

import RegisterPage from '.';
   

describe('Register Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter> <RegisterPage /> </BrowserRouter>)
  })

  afterEach(() => {
    cleanup()
  })

  it('h2 displays Register an account', () => {
    const h2 = document.querySelector('h2')
    expect(h2.innerHTML).toContain('Register an account')
  })

  it('only displays one h1', () => {
    const h1s = screen.queryAllByRole('heading' ,{
        level: 1
    })

    expect(h1s.length).not.toBeGreaterThan(1)
    })
})
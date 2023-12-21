import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import QuizPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Quiz Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
   <QuizPage />
   </BrowserRouter>
   )
  })

  afterEach(() => {
    cleanup()
  })

  it('h1 displays Subjects', () => {
    const display = screen.getByRole('heading')
    expect(display.textContent).toBe('Subjects')
  })

  it('displays h1 with Subjects text'), () => {
    const h1 = screen.getByText('Subjects');
    expect(h1).toBeInTheDocument();
  }

})
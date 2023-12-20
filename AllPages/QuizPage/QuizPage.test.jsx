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
    <BrowserRouter> <QuizPage /></BrowserRouter>
   )
  })

  afterEach(() => {
    cleanup()
  })

  it('h2 displays quizname', () => {
    const h2 = document.querySelector('h2')
    expect(h2.innerHTML).toContain('quizname')
  })

})
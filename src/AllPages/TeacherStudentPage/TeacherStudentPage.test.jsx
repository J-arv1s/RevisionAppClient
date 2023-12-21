import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TeacherStudentPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('TeacherStudentPage Component', () => {
  beforeEach(() => {
    render(
        <BrowserRouter> <TeacherStudentPage /></BrowserRouter>
 
   )
  })

  afterEach(() => {
    cleanup()
  })


  it('h2 displays Classroom Results', () => {
    const display = document.querySelector('h2')
    expect(display.innerHTML).toContain('Classroom Results')
  })

  it('has a table', () => {
    const element = screen.getByRole('table')
    expect(element).toBeInTheDocument()
  })


})
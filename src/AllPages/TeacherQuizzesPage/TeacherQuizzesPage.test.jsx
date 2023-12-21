import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';


import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TeacherQuizzesPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('TeacherQuizzesPage Component', () => {
  beforeEach(() => {
    render(
    <BrowserRouter> <TeacherQuizzesPage /></BrowserRouter>
   )
  })

  afterEach(() => {
    cleanup()
  })

  it('h1 displays Quizzes', () => {
    const display = screen.getByRole('heading')
    expect(display.textContent).toBe('Quizzes')
  })
  it('has a label displaying Assing Subject :', () => {
    const display = document.querySelector('label')
    expect(display.innerHTML).toContain('Assign Subject :')
  })

  it('has a add quiz button', () => {
    const button = document.querySelector('#addQuiz')
    expect(button.innerHTML).toBeTruthy()
  })

  it('has 2 labels', () => {
    const label1 = document.querySelector('#label1')
    expect(label1.innerHTML).toBeTruthy()
    const label2 = document.querySelector('#label2')
    expect(label2.innerHTML).toBeTruthy()
  })

  it('it has 2 inputs', () => {
    expect(screen.getByPlaceholderText('input1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('input2')).toBeInTheDocument();
  })


})
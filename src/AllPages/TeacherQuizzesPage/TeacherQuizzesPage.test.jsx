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

  it('h2 displays Quizes', () => {
    const h2 = document.querySelector('h2')
    expect(h2.innerHTML).toContain('Quizes')
  })

  it('has a add quiz button', () => {
    const button = document.querySelector('#addQuiz')
    expect(button.innerHTML).toBeTruthy()
  })
  it('has a delete button', () => {
    const button = document.querySelector('#delete')
    expect(button.innerHTML).toBeTruthy()
  })
  it('has a edit button', () => {
    const button = document.querySelector('#edit')
    expect(button.innerHTML).toBeTruthy()
  })

})
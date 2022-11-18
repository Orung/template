/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './pages/Index'

test('renders learn react link', () => {
    render(<Home />)
    const linkElement = screen.getByText(/Index/i)
    expect(linkElement).toBeInTheDocument()
})

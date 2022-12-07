/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react'
import { queries } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import React, { useEffect, useState } from "react"

// component
import { Overview } from '../../../Overview.jsx'
// subcomponents
import StyleSelector from '../StyleSelector.jsx'
import SizeQuantity from '../SizeQuantity.jsx'

describe('Style Selector: Size & Quantity', () => {
  test('sample', () => { })

  //
})

describe('Style Selector: Style Selector', () => {
  test('sample', () => { })

  //
})

// IDEAS
// test for props
// test for state
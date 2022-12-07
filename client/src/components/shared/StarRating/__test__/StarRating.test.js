/**
 * @jest-environment jsdom
 */

 import { fireEvent, render, screen } from '@testing-library/react';
 import { queries } from '@testing-library/dom';
 import userEvent from '@testing-library/user-event';
 import '@testing-library/jest-dom';
 import React, { useEffect, useState } from "react";

 // subcomponents
 import { StarRating } from '../StarRating.jsx'

 describe('Unit Test: StarRating component', () => {

   // Subcomponents
   test('Confirm initial load of StarRating component', () => {
     render(<StarRating />)
   })
  })
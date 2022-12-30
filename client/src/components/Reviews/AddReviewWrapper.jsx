import React, {useState, useEffect} from 'react';
import { AddReviewForm } from './AddReviewForm.jsx';

export const AddReviewWrapper = ({ product, image, metadata }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // console.log(metadata);

  return (
    <>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Add a Review</button>
      <AddReviewForm open={modalIsOpen} product={product} characteristics={metadata.characteristics} onClose={() => setModalIsOpen(false)}/>
    </>
  )
};
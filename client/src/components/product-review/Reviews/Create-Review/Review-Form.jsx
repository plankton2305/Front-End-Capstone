import { useState } from 'react';
import Reviews from '../../../../api/reviews.js';
import TextInput from './Text-Input.jsx';
import TextArea from './Text-Area.jsx';
import RadioButtons from './Radio-Buttons.jsx';

const ReviewForm = ({ productId }) => {
  const [formData, setFormData] = useState({
    product_id: productId,
    rating: 3,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  });

  // const ratingDescs = {0: 'poor', 1: 'mehh', 2:'okay ig', 3:';)', 4:'ohh yeahh >:)'};
  const textFields = ['name', 'email', 'summary', 'body'];
  const radioGroups = {
    'Size': {
      id: 14,
      ratingDesc: {
        1: 'A size too small',
        2: 'Half a size too small',
        3: 'Perfect',
        4: 'Half a size too big',
        5: 'A size too big'
      }
    },
    'Width': {
      id: 15,
      ratingDesc: {
        1: 'Too narrow',
        2: 'Slightly Narrow',
        3: 'Perfect',
        4: 'Slightly Wide',
        5: 'Too Wide'
      }
    },
    'Comfort': {
      id: 16,
      ratingDesc: {
        1: 'Uncomfortable',
        2: 'Slightly Uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect'
      }
    },
    'Quality': {
      id: 17,
      ratingDesc: {
        1: 'Poor',
        2: 'Below Average',
        3: 'What I Expected',
        4: 'Pretty Great',
        5: 'Perfect'
      }
    },
    'Length': {
      id: 18,
      ratingDesc: {
        1: 'Runs Short',
        2: 'Runs Slightly Short',
        3: 'Perfect',
        4: 'Runs Slightly Long',
        5: 'Runs Long'
      }
    },
    'Fit': {
      id: 19,
      ratingDesc: {
        1: 'Runs Tight',
        2: 'Runs Slightly Tight',
        3: 'Perfect',
        4: 'Runs Slightly Loose',
        5: 'Runs Loose'
      }
    }
  };

  const onChange = (name, value) => {
    console.log(productId)
    setFormData((previousFormData) => {
      console.log(previousFormData);
      return {
        ...previousFormData,
        [name]: value
      }
    })
  }

  const renderRadioGroups = () => {
    const elements = [];

    for (const key in radioGroups) {
      elements.push(<RadioButtons label={key} id={radioGroups[key].id} ratingDesc={radioGroups[key].ratingDesc} key={key} />)
    }

    return elements;
  }

  return (
    <div>
      <input type="checkbox" id="review-form-modal" className="modal-toggle"/>
      <div className="modal">
        <div className="modal-box max-w-none w-[50%]">
          <form className="space-y-4">
            <h4 className="font-bold">Create Review</h4>
            <TextInput inputName={'name'} placeholder="name" onChange={onChange} />
            <TextInput inputName={'email'} placeholder="info@site.com" onChange={onChange} />
            {/* Rating */}
            <TextInput inputName={'summary'} placeholder="review title" onChange={onChange} />
            <TextArea inputName={'body'} placeholder="review body" onChange={onChange} />
            {renderRadioGroups()}
            {/* recommend */}
            {/* images */}
            <button
              className="btn"
              onClick={(e) => {
                // make api call
                e.preventDefault();
                Reviews.addReview(formData)
                  .then((response) => {
                    console.log(JSON.stringify(response, null, 2))
                  })
                  .catch((err) => {
                    console.log(err);
                  })
              }}
            >
              Post Review
            </button>
            <div className="modal-action">
              <label for="review-form-modal" className="btn">Close Form</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;

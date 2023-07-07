import { useState } from 'react';

import Questions from '../../../api/questions.js';

const formatDate = (dateString) => {
  const config = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString).toLocaleDateString('en-US', config);
  return date === 'Invalid Date' ? 'Unknown' : date;
};

const AnswerResponse = ({body}) => {
  return (
    <div className="flex gap-2">
      <span className="font-bold text-lg">A:</span>
      <span className="self-center">{ body }</span>
    </div>
  );
};

const AnswerThumbnails = ({photos}) => {
  const style = {
    maxWidth: '100px',
    display: 'inline-block',
    paddingRight: '1rem'
  };

  return (
    <div>
      {
        photos.map((photo, index) => {
          return <img
            key={ index }
            src={ photo }
            alt="(image)"
            style={ style }
          />;
        })
      }
    </div>
  );
};

const AnswerUser = ({name, date}) => {
  const style = {
    fontWeight: name === 'Seller' ? 'bold' : 'normal'
  };

  date = formatDate(date);

  return (
    <span>
    by <span style={style}>{name}, {date}</span>
    </span>
  );
};

const AnswerHelpful = ({id, helpfulCount, setHelpfulCount}) => {
  const clickHandler = (e) => {
    setHelpfulCount(helpfulCount + 1);
    e.target.setAttribute('disabled', true);
    Questions.markAnswerHelpful(id);
  };

  return (
    <span>
      <span className="pr-2">Helpful?</span>
      <button className="underline" onClick={(e) => clickHandler(e) }>Yes</button>
      <span className="pl-1">({ helpfulCount })</span>
    </span>
  );
};

const AnswerReport = ({id, reported, setReported}) => {
  const clickHandler = (e) => {
    e.target.setAttribute('disabled', true);
    setReported(true);
    Questions.reportAnswer(id);
  };

  const classname = reported ? 'font-bold' : 'underline';
  const text = reported ? 'Reported' : 'Report';

  return (
    <button className={classname} onClick={clickHandler}>{text}</button>
  );
};

const Answer = ({ answer }) => {
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness);
  const [reported, setReported] = useState(false);

  const Divider = () => {
    return (
      <span className="px-4">|</span>
    );
  };

  return (
    <>
      <div>
        <AnswerResponse body={answer.body} />

        {
          (answer.photos && answer.photos.length > 0) &&
          <div className="ml-7">
            <AnswerThumbnails photos={answer.photos} />
          </div>
        }

        <div className="inline-block mt-2 ml-7">
          <AnswerUser name={answer.answerer_name || 'Anonmyous'} date={answer.date} />
        </div>

        <Divider />

        <AnswerHelpful
          id={answer.id}
          helpfulCount={helpfulCount}
          setHelpfulCount={setHelpfulCount}
        />

        <Divider />

        <AnswerReport id={answer.id} reported={reported} setReported={setReported} />
      </div>
    </>
  );
};

export default Answer;
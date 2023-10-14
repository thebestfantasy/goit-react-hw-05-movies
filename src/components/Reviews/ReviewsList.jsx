import { ReviewList } from './ReviewsList.Styled';

const ReviewsList = ({ dataReview }) => {
  if (!dataReview.results.length) {
    return <h2>We haven't reviews yet</h2>;
  }
  return (
    <>
      {dataReview.results.map(({ author, content, id }) => (
        <div key={id}>
          <ReviewList>
            <li>
              <p>
                <b>Author: {author}</b>
              </p>
            </li>
            <li>{content}</li>
          </ReviewList>
        </div>
      ))}
    </>
  );
};

export default ReviewsList;

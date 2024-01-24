import './Contents.css';

const Contents = ({ randomText }) => {
  // console.log(randomText);
  return (
    <div className='contents'>
      <div className='plant'>
        <img src={`./img/planet00${randomText.id}.png`} alt='' />
      </div>
      <h2 className='title'>{randomText.title}</h2>
      <p className='content'>{randomText.content}</p>
    </div>
  );
};

export default Contents;

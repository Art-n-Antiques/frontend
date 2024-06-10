// Import normalization styles
import 'modern-normalize';

const HomePage = () => {
  const imageUrl: string =
    'https://cdn.pixabay.com/photo/2014/07/10/11/19/tuba-388989_960_720.jpg';
  return (
    <div>
      here will be home page
      <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>
        Art&Antiques Frontend
      </h1>
      <img
        src={imageUrl}
        alt="old Antiques "
        width={700}
        style={{
          borderRadius: ' 60% 40% 30% 70% / 60% 30% 70% 40%',
          border: '14px solid #020202',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  );
};

export default HomePage;

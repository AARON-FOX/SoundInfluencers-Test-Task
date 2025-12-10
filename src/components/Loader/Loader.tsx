import './Loader.scss';

const loaderWaves: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      {loaderWaves.map((num) => (
        <div key={num} className="loader-container__wave"></div>
      ))}
    </div>
  );
};

import './GlassEffect.scss';

export const GlassEffect: React.FC = () => {
  return (
    <div className="glass-container">
      <p className="glass-container__text">
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
      </p>

      <div className="glass-container__glass-logo glass-logo">
        <span className="glass-logo__logo"></span>
        <p className="glass-logo__name">SoundInfluencers</p>
      </div>
    </div>
  );
};

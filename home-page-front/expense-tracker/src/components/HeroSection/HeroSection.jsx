import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-text-big">Your Money, Simplified.</h1>
          <h2 >Track Expenses, Save Smart!</h2>
        </div>
        <div className="cash-image">
        <img src="./website-assets/money.png" alt="this shit wont load ong"></img>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

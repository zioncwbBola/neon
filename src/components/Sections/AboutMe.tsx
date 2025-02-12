// src/components/Sections/AboutMe.tsx
const AboutMe = () => {
  return (
    <div className="card card-side bg-black/70 ml-10 text-green-300 lg:shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform w-30">
      <div className="card-body">
        <h2 className="card-title">About Me</h2>
        <p>This is a brief description about me.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

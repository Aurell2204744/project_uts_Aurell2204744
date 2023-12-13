import Hero from "./Hero";
import CardProject from "./CardProject";
import CardActivity from "./CardActivity";
import project1 from "./../assets/animasi.jpg";
import project2 from "./../assets/makeUp.jpg";
import project3 from "./../assets/fotografi.jpg";
import activity1 from "./../assets/DPO1.jpg";
import activity2 from "./../assets/ekobis.jpg";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="pt-5 col-12 text-center my-5">
            <h1>My Hobbies</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12">
            <CardProject image={project1} project="Animation" description="Create animations with Adobe Premiere Pro software." />
          </div>
          <div className="col-lg-4 col-12">
            <CardProject image={project2} project="Make Up" description="I love makeup tutorials and make it more unique." />
          </div>
          <div className="col-lg-4 col-12">
            <CardProject image={project3} project="Photography" description="Great memories always need a documentary." />
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>My Activities</h1>
          </div>
          <div className="col-12">
            <CardActivity image={activity1} description="This is my internal activity on campus with BEM Kemakom FMIPA UPI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import ArticleCard from "../cards/ArticleCard";
import TechnologyCard from "../cards/TechnologyCard";


// Simulated slider images
const sliderImages = [
  { src: "/banner.jpg", alt: "Training Banner 1" },
  { src: "/banner4.jpg", alt: "Training Banner 2" },
  { src: "/banner3.jpg", alt: "Training Banner 3" },
  { src: "/banner6.jpg", alt: "Training Banner 4" },
  { src: "/banner7.jpg", alt: "Training Banner 5" },
  
];

// Technologies grid
const technologies = [
  { name: "HTML", img: "/html.jpg" },
  { name: "CSS", img: "/css.jpg" },
  { name: "JavaScript", img: "/javascript.jpg" },
  { name: "React", img: "/node.jpg" },
  { name: "MongoDB", img: "/mongodb.jpg" },
  { name: "Deployment", img: "/depl.jpg" },
  { name: "Aptitude & English", img: "/apti.jpg" },
  {name:"React" , img:"/react1.jpg"},
];

// Articles section
const articles = [
  {
    title: "Top 5 JavaScript Tips for Beginners",
    summary: "Improve your JavaScript skills with these essential tips.",
  },
  {
    title: "Why React is the Future of Frontend",
    summary: "Discover why React is dominating modern frontend development.",
  },
  {
    title: "Master CSS Grid in 10 Minutes",
    summary: "A fast-paced guide to get you started with CSS Grid layout.",
  },
];

const HomePage = () => {
  return (
    <div className="font-sans">

    
      {/* Technologies Section */}
      <section className="px-6 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Technologies We Cover</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.name} name={tech.name} img={tech.img} />
          ))}
        </div>
      </section>



      {/* Banner / Image Scroll Section */}
      <section className="overflow-x-auto whitespace-nowrap mb-8 px-4">
  <div className="flex space-x-3">
    {sliderImages.map((img, index) => (
      <div
        key={index}
        className="min-w-[300px] max-w-[300px] h-[180px] rounded-lg overflow-hidden shadow-md flex-shrink-0"
      >
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    ))}
  </div>
</section>


      {/* Articles Section */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Learn & Grow</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {articles.map((article, idx) => (
              <ArticleCard key={idx} title={article.title} summary={article.summary} />
            ))}
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Featured Tip</h3>
            <p>Subscribe to our newsletter for weekly coding insights.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;

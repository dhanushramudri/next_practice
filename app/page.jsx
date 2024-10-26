import Feed from "../components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find Your Dream Job
        <br className="max-md:hidden" />
        <span className="blue_gradient text-center dark:text-white dark:bg-teal">
          Powered by AI
        </span>
      </h1>

      <p className="desc text-center">
        Welcome to JobBoard, the AI-driven platform where you can discover,
        apply, and get hired for your ideal job. Our advanced AI tools help
        match you with the best opportunities tailored to your skills and
        preferences.
      </p>
      <Feed />
    </section>
  );
};

export default Home;

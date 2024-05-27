import Feed from "../components/Feed";

const Home = () => {
  const crypto = require("crypto");

  // Generate 32 random bytes and convert to base64
  const base64String = crypto.randomBytes(32).toString("base64");

  console.log(base64String);

  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;

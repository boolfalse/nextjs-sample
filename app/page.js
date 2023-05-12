
import Feed from "@components/Feed";

const Home = () => {
  return (
      <section className='w-full flex-center flex-col text-center'>
          <h2 className='head_text text-ceter'>
              Welcome to the Next.js app!
              <br className='max-md:hidden' />
              <span className='orange_gradient text-center'>AI-powered Prompts</span>
          </h2>
          <p className='desc text-center'>This app is an AI prompting tool for modern world to discover, create and share creative prompts</p>
          <Feed />
      </section>
  );
};

export default Home;

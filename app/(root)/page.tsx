import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="text-3xl text-violet-600 font-black">
        Welcome to the world of Next.js
      </h1>
    </>
  );
};

export default Home;

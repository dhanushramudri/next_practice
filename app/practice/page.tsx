import Link from "next/link";

const Practice = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/new/123">
        <h3>Go to the 123</h3>
      </Link>
    </div>
  );
};

export default Practice;

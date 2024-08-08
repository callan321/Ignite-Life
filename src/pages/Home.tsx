import HomeMeta from "../meta/HomeMeta.tsx";

export default function Home() {
  return (
    <>
      <HomeMeta />
      <div className="flex w-full items-center justify-center p-12">
        <h1 className="text-center text-2xl">This will be the home page </h1>
      </div>
    </>
  );
}

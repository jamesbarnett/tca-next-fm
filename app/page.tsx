import Image from "next/image";
import Calculator from "@/app/_components/calculator"
import Results from "@/app/_components/results"

export default function Home() {
  return (
    <main className="">
      <header className="padding-16">
        <h1><span className="logo spli">SPLI</span><span className="logo tter">TTER</span></h1>
      </header>
      <article className="bg-neutral-100 padding-24 rounded-xl">
        <Calculator />
        <Results />
      </article>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header>
        <h1><span>SPLI</span><span>TTER</span></h1>
      </header>
      <article>
        <article className="bill-total">
          <h2>Bill</h2>
          <input type="text" />
        </article>
        <article className="tip">
          <h2>Select Tip %</h2>
          <button className="outline">5%</button>
          <button className="outline">10%</button>
          <button className="outline">15%</button>
          <button className="outline">25%</button>
          <button className="outline">50%</button>
          <button className="outline">Custom</button>
        </article>
        <article className="people">
          <h2>Number of People</h2>
          <input type="text" />
        </article>
        <article className="results">
          <h2>Tip Amount</h2>
          <p>/ person</p>
          <h2>Total</h2>
          <p>/ person</p>
          <button className="outline">Reset</button>
        </article>
      </article>
    </main>
  );
}

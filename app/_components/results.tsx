import ResetButton from "@/app/_components/reset-button"

const Results = () => {

  const resetValues = () => {
    const bill = document.getElementById("bill-input")
    let percentages = Array.from({length: 5}, (val, index) => (index + 1) * 5)
    document.querySelectorAll(".percentage-input")
      .forEach(x => {
        x.removeAttribute("checked")
      })
  }
  return ( 
    <article className="results padding-16">
      <div> 
        <h2>Tip Amount</h2>
        <p>/ person</p>
      </div>
      <div>
        <h2>Total</h2>
        <p>/ person</p>
      </div>
      <p id="tip-per-person" className="result-value"></p>
      <p id="bill-per-person" className="result-value"></p>
      <button className="button button-reset mt-4">Reset</button>
    </article>
  );
}

export default Results


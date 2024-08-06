const PercentageButton = ({ name, id, value, onChange, checked, text }) => {
  return (
    <label htmlFor={id} className="percentage-label">
      <input
        className="percentage-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="percentage-radio" />
      {text}
    </label>
  )
}

export default PercentageButton

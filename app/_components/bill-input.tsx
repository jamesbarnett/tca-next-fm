const BillInput = ({id, name, value, ...props }) => {
  return <input {...props} id={id} name={name} value={value} type="text" />
}

export default BillInput

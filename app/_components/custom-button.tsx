"use client"

const CustomButton = ({onChange, ...props}) => {
  return (
    <button {...props} onChange={onChange} className="button custom">Custom</button>
  );
}

export default CustomButton

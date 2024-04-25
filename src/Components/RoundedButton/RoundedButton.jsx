const RoundedButton = ({children, active, onClick}, props) => {
  return (
    <>
      <a className={`${active && 'bg-neutral-800/10 active:bg-neutral-800/30 group-active:bg-neutral-800/30 rounded-full backdrop-blur-xl cursor-pointer'} flex items-center justify-center w-12 h-12 ` } onClick={onClick} {...props}>{children} </a>
    </>
  )
}

export default RoundedButton

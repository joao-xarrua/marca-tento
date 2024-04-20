const RoundedButton = ({children, active, onClick}) => {
  return (
    <>
      <a className={`${active && 'bg-neutral-800/10  rounded-full backdrop-blur-xl'} flex items-center justify-center w-12 h-12 ` } onClick={onClick}>{children} </a>
    </>
  )
}

export default RoundedButton

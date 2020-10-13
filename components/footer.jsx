const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()

  return (
    <>
      <div className="w-full bg-black h-10 flex items-center">
        <div className="container mx-auto flex justify-center">
          <p className="text-center italic text-white text-xl">{year}</p>
        </div>
      </div>
    </>
  )
}

export default Footer ;
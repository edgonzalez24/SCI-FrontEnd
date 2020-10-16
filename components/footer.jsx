const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()

  return (
    <>
      <div className="w-full bg-blue-500 h-10 flex items-center">
        <div className="container mx-auto flex justify-center">
          <p className="text-center text-white text-md font-bold opacity-50">COPYRIGHT © {year}</p>
        </div>
      </div>
    </>
  )
}

export default Footer ;
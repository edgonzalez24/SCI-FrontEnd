const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()

  return (
    <div className="footer w-full bg-blue-500 h-10 flex items-center relative">
      <div className="container mx-auto flex justify-center">
        <p className="text-center text-white text-md font-bold opacity-50">COPYRIGHT © {year}</p>
      </div>
    </div>
  )
}

export default Footer ;
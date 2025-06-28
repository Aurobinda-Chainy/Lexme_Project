const AboutSec = () =>{
    return(
        <>  
    <div className="max-w-7xl mx-auto px-6 py-5">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">About Lexme</h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        <strong>Lexme Healthcare Limited</strong> (LHL) is an Indian for-profit private hospital network headquartered in Gurgaon, India.
        Lexme started its health care operations in Mohali, Punjab, where the first Lexme hospital was started.
        Later on, the hospital chain expanded its presence and increased its strength in various parts of the country.
        The Escorts Heart and Research Center, Okhla, Delhi became a major operating unit of the chain.
        Several renowned doctors and healthcare professionals have also built their careers at this institute.
      </p>

      <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 md:mb-0 ">
          Not ready to apply? Sign up to join our Talent Pool for future opportunities
        </h3><br />
        <button className="bg-green-200 text-black font-medium py-2 px-6 rounded hover:bg-green-300 transition text-center">
          Join Us
        </button>
      </div>

      <p className="italic text-gray-600 text-center">
        Disclaimer – Lexme follows a formal recruitment process through its HR department that entails on-site or virtual meetings.
        We do not demand or accept any monetary consideration from any individual against an offer letter or appointment or as a part of the recruitment process.
      </p>
    </div>
        </>
    )
}

export default AboutSec;
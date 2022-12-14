export const Landing = () => {
  return (
    <div style={{ backgroundImage: `url('/assets/images/landing/bg.png')` }} className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        <img alt="logo" src="/assets/images/landing/logo.png" className="w-12 h-12" />
        <p className="text-white font-bold text-4xl">Thank you!</p>
        <p className="text-white text-center">We will notify you as soon as we've launched.<br/> You will get early access before the general public.</p>
        <div className="py-4 px-40 rounded-md bg-white hover:bg-[#176B3A] text-[#176B3A] hover:text-white cursor-pointer">Home</div>
      </div>
    </div>
  );
};

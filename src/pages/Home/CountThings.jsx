import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountThings = () => {
  const counters = [
    { number: 2500, label: 'Clients' },
    { number: 3055, label: 'Booking' },
    { number: 50, label: 'Swimming' },
    { number: 1530, label: 'Apartment' },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='my-16'>
      <div>
        <div className='flex flex-col justify-center items-center mb-10'>
          <h1 className="text-4xl font-bold text-neutral-800">Company Details</h1>
          <h1 className="text-4xl font-bold text-neutral-800"></h1>

          <p className='text-lg text-center font-medium text-neutral-600 mt-4 w-4/5'>EmerGent Properties is a leading real estate company specializing in residential and commercial property development. With over 20 years of experience, we offer a wide range of services including property management, investment consultancy, and market analysis.</p>

        </div>
      </div>
      <div ref={ref} className="bg-cover bg-center py-12 mt-16" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="bg-black h-full bg-opacity-50 py-8">
          <div className="container mx-auto flex justify-around text-white">
            {counters.map((counter, index) => (
              <div key={index} className="text-center">
                <h2 className="text-4xl font-bold">
                  {inView ? <CountUp end={counter.number} duration={2.5} /> : counter.number}
                </h2>
                <p className="text-xl">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountThings;
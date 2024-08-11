import { motion } from 'framer-motion';

const FeatureCard = ({ number, title, description, icon }) => (
  <motion.div 
    className="bg-gray-100 p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <span className="text-gray-500 text-xl font-bold mr-4  p-2 rounded-full border-4 border-black">{number}</span>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
const FeatureCard2 = ({ number, title, description, icon }) => (
  <motion.div 
    className="bg-gray-100 p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <span className="text-gray-500 text-xl font-bold mr-4  p-2 rounded-full border-4 border-black">{number}</span>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeatureGrid = () => (
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeatureCard
        number="01"
        title="High internal quality control"
        description="Ensuring top-notch standards in all processes"
        // icon={<YourCustomIcon1 className="w-12 h-12 text-blue-500" />}
      />
      <FeatureCard
        number="02"
        title="Support 24/7 for uninterrupted operation"
        description="Round-the-clock assistance for seamless functionality"
        // icon={<YourCustomIcon2 className="w-12 h-12 text-blue-500" />}
      />
      <FeatureCard
        number="03"
        title="Experience certified in many technologies and methodologies"
        description="Proven expertise across various tech domains"
        // icon={<YourCustomIcon3 className="w-12 h-12 text-blue-500" />}
      />
    </div>
  </div>
);

 export default FeatureGrid
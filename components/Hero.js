import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-center mt-20">
      <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-5xl font-bold mb-4">
        DevOps & Cloud Engineer
      </motion.h1>
      <p className="text-gray-400 mb-6">AWS | Kubernetes | Terraform | CI/CD</p>
    </div>
  );
}

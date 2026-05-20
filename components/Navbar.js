export default function Navbar() {
  return (
    <div className="flex justify-between p-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold text-cyan-400">Karthik</h1>
      <div className="space-x-6">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

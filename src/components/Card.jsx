const Card = ({ children }) => {
  return (
    <div className="bg-glass backdrop-blur-md p-6 rounded-xl border border-white/10 hover:scale-105 transition">
      {children}
    </div>
  );
};

export default Card;

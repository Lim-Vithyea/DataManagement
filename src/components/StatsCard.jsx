import '../index.css'

export const StatsCard = ({ title, value,color }) => (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <h3 className="text-lg font-medium khmer-text">{title}</h3>
      <p className={`${color} text-3xl font-bold`}>{value}</p>
    </div>
  );



interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: string;
  locale: string;
}

export const StatsCard = ({ title, value, change, icon, locale }: StatsCardProps) => {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          <p className={`text-sm font-medium mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change} {locale === 'fa' ? 'از ماه گذشته' : 'from last month'}
          </p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};
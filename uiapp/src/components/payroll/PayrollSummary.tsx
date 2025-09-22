'use client';

interface PayrollSummaryProps {
  locale: string;
}

export const PayrollSummary = ({ locale }: PayrollSummaryProps) => {
  const summaryData = [
    {
      title: locale === 'fa' ? 'کل حقوق این ماه' : 'Total Payroll This Month',
      amount: '۲۵۰,۰۰۰,۰۰۰ تومان',
      change: '+5%',
      isPositive: true
    },
    {
      title: locale === 'fa' ? 'میانگین حقوق' : 'Average Salary',
      amount: '۱۲,۵۰۰,۰۰۰ تومان',
      change: '+3%',
      isPositive: true
    },
    {
      title: locale === 'fa' ? 'کارمندان پرداخت شده' : 'Employees Paid',
      amount: '۲۰ نفر',
      change: '+2',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {summaryData.map((item, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-2xl font-bold text-gray-900 mb-2">{item.amount}</p>
          <p className={`text-sm font-medium ${item.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {item.change} {locale === 'fa' ? 'نسبت به ماه گذشته' : 'from last month'}
          </p>
        </div>
      ))}
    </div>
  );
};
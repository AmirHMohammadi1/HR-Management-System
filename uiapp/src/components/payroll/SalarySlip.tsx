interface SalarySlipProps {
  employeeName: string;
  employeeId: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  locale: string;
}

export const SalarySlip = ({
  employeeName,
  employeeId,
  month,
  basicSalary,
  allowances,
  deductions,
  netSalary,
  locale
}: SalarySlipProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{employeeName}</h3>
          <p className="text-gray-600">ID: {employeeId}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">{month}</p>
          <p className="text-sm text-gray-500">
            {locale === 'fa' ? 'تاریخ پرداخت: ۱۰ دی ۱۴۰۲' : 'Payment Date: Jan 1, 2024'}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span>{locale === 'fa' ? 'حقوق پایه:' : 'Basic Salary:'}</span>
          <span>{basicSalary.toLocaleString('fa-IR')} تومان</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>{locale === 'fa' ? 'مزایا و اضافات:' : 'Allowances:'}</span>
          <span>+{allowances.toLocaleString('fa-IR')} تومان</span>
        </div>
        <div className="flex justify-between text-red-600">
          <span>{locale === 'fa' ? 'کسورات:' : 'Deductions:'}</span>
          <span>-{deductions.toLocaleString('fa-IR')} تومان</span>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-semibold text-lg">
          <span>{locale === 'fa' ? 'خالص قابل پرداخت:' : 'Net Salary:'}</span>
          <span>{netSalary.toLocaleString('fa-IR')} تومان</span>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
        {locale === 'fa' ? 'دانلود فیش حقوقی' : 'Download Salary Slip'}
      </button>
    </div>
  );
};
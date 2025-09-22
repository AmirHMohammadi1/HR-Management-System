import { useLocaleServer } from '@/hooks/useLocaleServer';
import { PayrollSummary } from '@/components/payroll/PayrollSummary';
import { SalarySlip } from '@/components/payroll/SalarySlip';

interface PayrollPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PayrollPage({ params }: PayrollPageProps) {
  const { locale } = await params;
  const currentLocale = useLocaleServer(locale);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {currentLocale === 'fa' ? 'مدیریت حقوق و دستمزد' : 'Payroll Management'}
      </h1>
      
      <PayrollSummary locale={currentLocale} />
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {currentLocale === 'fa' ? 'فیش حقوقی' : 'Salary Slips'}
        </h2>
        <SalarySlip 
          employeeName="علی محمدی"
          employeeId="EMP-001"
          month="دی 1402"
          basicSalary={15000000}
          allowances={3000000}
          deductions={1000000}
          netSalary={17000000}
          locale={currentLocale}
        />
      </div>
    </div>
  );
}
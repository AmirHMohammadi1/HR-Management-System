/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useState } from 'react';
import { EmployeeTable } from '@/components/employees/EmployeeTable';
import { EmployeeFilters } from '@/components/employees/EmployeeFilters';
import { Modal } from '@/components/common/Modal';
import { EmployeeForm } from '@/components/employees/EmployeeForm';
import { useModal } from '@/hooks/useModal';
import { Employee } from '@/types';
import { createEmployee, updateEmployee } from '@/lib/api/employees';
import { useLocale } from '@/hooks/useLocale';

interface EmployeesPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    page?: string;
    department?: string;
    status?: string;
    search?: string;
  }>;
}

export default function EmployeesPage({ params, searchParams }: EmployeesPageProps) {
  const [paramsResolved, setParamsResolved] = useState(true);
  const [paramsData, setParamsData] = useState<{ locale: string }>({ locale: 'fa' });
  const [searchParamsData, setSearchParamsData] = useState<{
    page?: string;
    department?: string;
    status?: string;
    search?: string;
  }>({});
  
  // Resolve async params
  if (!paramsResolved) {
    params.then(data => {
      setParamsData(data);
      setParamsResolved(true);
    });
    searchParams.then(data => {
      setSearchParamsData(data);
    });
    return <div>Loading...</div>;
  }

  const { locale } = paramsData;
  const currentLocale = useLocale(locale)
  // const currentLocale = useLocaleServer(locale);
  const { page = '1', department = '', status = '', search = '' } = searchParamsData;

  const { isOpen, openModal, closeModal } = useModal();
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreateEmployee = () => {
    setEditingEmployee(null);
    openModal();
  };

  // const handleEditEmployee = (employee: Employee) => {
  //   setEditingEmployee(employee);
  //   openModal();
  // };

  const handleSubmit = async (data: Omit<Employee, 'id'>) => {
    try {
      if (editingEmployee) {
        await updateEmployee(editingEmployee.id, data);
      } else {
        await createEmployee(data);
      }
      setRefreshKey(prev => prev + 1);
      closeModal();
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {currentLocale.locale === 'fa' ? 'مدیریت کارمندان' : 'Employees Management'}
        </h1>
        <button 
          onClick={handleCreateEmployee}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          {currentLocale.locale === 'fa' ? 'کارمند جدید' : 'New Employee'}
        </button>
      </div>

      <EmployeeFilters locale={currentLocale.locale} />

      <EmployeeTable
        key={refreshKey}
        locale={currentLocale.locale}
        page={parseInt(page)}
        department={department}
        status={status}
        searchQuery={search}
        // onEditEmployee={handleEditEmployee}
      />

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={editingEmployee 
          ? (currentLocale.locale === 'fa' ? 'ویرایش کارمند' : 'Edit Employee')
          : (currentLocale.locale === 'fa' ? 'کارمند جدید' : 'New Employee')
        }
      >
        <EmployeeForm
          employee={editingEmployee || undefined}
          locale={currentLocale.locale}
          onSubmit={handleSubmit}
          onCancel={closeModal}
        />
      </Modal>
    </div>
  );
}
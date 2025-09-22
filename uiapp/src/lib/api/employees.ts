import { Employee } from '@/types';

// شبیه‌سازی داده‌های کارمندان
const mockEmployees: Employee[] = [
  {
    id: 1,
    name: 'علی محمدی',
    position: 'توسعه دهنده فرانت‌اند',
    department: 'فناوری اطلاعات',
    hireDate: '1402/01/15',
    email: 'ali.mohammadi@company.com',
    phone: '09123456789',
    status: 'active',
    salary: 15000000,
  },
  {
    id: 2,
    name: 'فاطمه احمدی',
    position: 'مدیر منابع انسانی',
    department: 'منابع انسانی',
    hireDate: '1401/08/22',
    email: 'fateme.ahmadi@company.com',
    phone: '09129876543',
    status: 'active',
    salary: 18000000,
  }
];

export const getEmployees = async (filters?: {
  department?: string;
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}): Promise<{ employees: Employee[]; total: number }> => {
  // شبیه‌سازی تاخیر در پاسخ
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredEmployees = [...mockEmployees];
  
  if (filters?.department) {
    filteredEmployees = filteredEmployees.filter(emp => 
      emp.department === filters.department
    );
  }
  
  if (filters?.status) {
    filteredEmployees = filteredEmployees.filter(emp => 
      emp.status === filters.status
    );
  }
  
  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredEmployees = filteredEmployees.filter(emp => 
      emp.name.toLowerCase().includes(searchTerm) ||
      emp.email.toLowerCase().includes(searchTerm) ||
      emp.position.toLowerCase().includes(searchTerm)
    );
  }
  
  const total = filteredEmployees.length;
  const limit = filters?.limit || 10;
  const page = filters?.page || 1;
  const startIndex = (page - 1) * limit;
  
  return {
    employees: filteredEmployees.slice(startIndex, startIndex + limit),
    total
  };
};

export const getEmployeeById = async (id: number): Promise<Employee | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockEmployees.find(emp => emp.id === id) || null;
};

export const createEmployee = async (employee: Omit<Employee, 'id'>): Promise<Employee> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newEmployee = {
    ...employee,
    id: Math.max(...mockEmployees.map(emp => emp.id)) + 1
  };
  mockEmployees.push(newEmployee);
  return newEmployee;
};

export const updateEmployee = async (id: number, updates: Partial<Employee>): Promise<Employee | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockEmployees.findIndex(emp => emp.id === id);
  if (index === -1) return null;
  
  mockEmployees[index] = { ...mockEmployees[index], ...updates };
  return mockEmployees[index];
};

export const deleteEmployee = async (id: number): Promise<boolean> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockEmployees.findIndex(emp => emp.id === id);
  if (index === -1) return false;
  
  mockEmployees.splice(index, 1);
  return true;
};
export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  hireDate: string;
  email: string;
  phone: string;
  status: 'active' | 'on-leave' | 'terminated';
  avatar?: string;
  salary?: number;
  address?: string;
}

export interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  applications: number;
  status: 'open' | 'closed';
  postedDate: string;
  description: string;
  requirements?: string[];
  salaryRange?: string;
}

export interface Candidate {
  id: number;
  name: string;
  appliedFor: string;
  status: 'applied' | 'interview' | 'rejected' | 'hired';
  appliedDate: string;
  interviewer: string;
  resume: string;
  email: string;
  phone: string;
  rating?: number;
}

export interface AttendanceRecord {
  id: number;
  employeeId: number;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'present' | 'absent' | 'late' | 'early-leave';
  hoursWorked: number;
  notes?: string;
}

export interface Payroll {
  id: number;
  employeeId: number;
  employeeName: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'paid' | 'pending';
  paymentDate?: string;
}

export interface PerformanceReview {
  id: number;
  employeeId: number;
  employeeName: string;
  reviewer: string;
  date: string;
  rating: number;
  comments: string;
  goals: string[];
  achievements: string[];
}

export interface Department {
  id: number;
  name: string;
  manager: string;
  employeeCount: number;
  budget: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  avatar?: string;
  lastLogin?: string;
  isActive: boolean;
}
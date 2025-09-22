import { AttendanceRecord } from '@/types';

// شبیه‌سازی داده‌های حضور و غیاب
const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: 1,
    employeeId: 1,
    date: '1402/10/15',
    checkIn: '08:15',
    checkOut: '16:45',
    status: 'present',
    hoursWorked: 8.5,
    notes: 'عدم تاخیر'
  },
  {
    id: 2,
    employeeId: 1,
    date: '1402/10/16',
    checkIn: '09:30',
    checkOut: '17:00',
    status: 'late',
    hoursWorked: 7.5,
    notes: 'تاخیر 30 دقیقه‌ای'
  },
  {
    id: 3,
    employeeId: 2,
    date: '1402/10/15',
    checkIn: '08:00',
    checkOut: '16:30',
    status: 'present',
    hoursWorked: 8.5,
    notes: ''
  }
];

export const getAttendanceRecords = async (filters?: {
  employeeId?: number;
  startDate?: string;
  endDate?: string;
  status?: string;
  page?: number;
  limit?: number;
}): Promise<{ records: AttendanceRecord[]; total: number }> => {
  // شبیه‌سازی تاخیر در پاسخ
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredRecords = [...mockAttendanceRecords];
  
  if (filters?.employeeId) {
    filteredRecords = filteredRecords.filter(record => record.employeeId === filters.employeeId);
  }
  
  if (filters?.status) {
    filteredRecords = filteredRecords.filter(record => record.status === filters.status);
  }
  
  // فیلتر بر اساس تاریخ
  if (filters?.startDate && filters?.endDate) {
    filteredRecords = filteredRecords.filter(record => {
      const recordDate = new Date(record.date);
      const startDate = new Date(filters.startDate as string);
      const endDate = new Date(filters.endDate as string);
      return recordDate >= startDate && recordDate <= endDate;
    });
  }
  
  const total = filteredRecords.length;
  const limit = filters?.limit || 10;
  const page = filters?.page || 1;
  const startIndex = (page - 1) * limit;
  
  return {
    records: filteredRecords.slice(startIndex, startIndex + limit),
    total
  };
};

export const getAttendanceRecordById = async (id: number): Promise<AttendanceRecord | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockAttendanceRecords.find(record => record.id === id) || null;
};

export const createAttendanceRecord = async (record: Omit<AttendanceRecord, 'id'>): Promise<AttendanceRecord> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newRecord = {
    ...record,
    id: Math.max(...mockAttendanceRecords.map(record => record.id)) + 1
  };
  mockAttendanceRecords.push(newRecord);
  return newRecord;
};

export const updateAttendanceRecord = async (id: number, updates: Partial<AttendanceRecord>): Promise<AttendanceRecord | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const index = mockAttendanceRecords.findIndex(record => record.id === id);
  if (index === -1) return null;
  
  mockAttendanceRecords[index] = { ...mockAttendanceRecords[index], ...updates };
  return mockAttendanceRecords[index];
};

export const getAttendanceSummary = async (employeeId: number, month: string): Promise<{
  present: number;
  absent: number;
  late: number;
  earlyLeave: number;
  totalHours: number;
}> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const records = mockAttendanceRecords.filter(record => 
    record.employeeId === employeeId && record.date.startsWith(month)
  );
  
  const summary = {
    present: records.filter(record => record.status === 'present').length,
    absent: records.filter(record => record.status === 'absent').length,
    late: records.filter(record => record.status === 'late').length,
    earlyLeave: records.filter(record => record.status === 'early-leave').length,
    totalHours: records.reduce((total, record) => total + record.hoursWorked, 0)
  };
  
  return summary;
};
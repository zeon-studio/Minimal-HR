import { store } from "@/redux/store";

export const getEmployeeInfo = (id: string) => {
  const employees = store.getState().api.queries[
    "getEmployeesId(undefined)"
  ] as {
    data: {
      result: {
        id: string;
        name: string;
        work_email: string;
        department: string;
        designation: string;
      }[];
    };
  };
  const employee = employees?.data?.result?.find(
    (employee: any) => employee.id === id
  );

  const fallback = {
    id,
    name: id,
    work_email: "N/A",
    department: "N/A",
    designation: "N/A",
  };

  return employee ? employee : fallback;
};

import Papa from "papaparse";

export const exportToCSV = (data) => {
  if (!data || data.length === 0) {
    console.error("No data available for export.");
    alert("No data available for export.");
    return;
  }
  const csv = Papa.unparse(data); // Convert JSON to CSV
  // Add UTF-8 BOM to support Khmer characters
  const csvWithBOM = "\uFEFF" + csv;
  const blob = new Blob([csvWithBOM], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "SchoolData.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

"use client";

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import getArchivedPosts from "../utils/get-archived-posts";

const onExport = async () => {
  const archivedPosts = await getArchivedPosts();

  if (!archivedPosts) {
    toast.error("Inga arkiverade annonser hittades");
    return;
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Arkiverade annonser");

  worksheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Anledning", key: "deletionReason", width: 20 },
    { header: "Arkiveringsdatum", key: "archivedAt", width: 24 },
    { header: "Skapad", key: "createdAt", width: 24 },
    { header: "Plats", key: "location", width: 28 },
    { header: "Titel", key: "title", width: 32 },
    { header: "Beskrivning", key: "description", width: 32 },
    { header: "Annonstyp", key: "postType", width: 20 },
    { header: "Kategori", key: "category", width: 24 },
    { header: "Angett slutdatum", key: "hasCustomExpirationDate", width: 16 },
  ];

  if (Array.isArray(archivedPosts)) {
    archivedPosts.forEach((archivedPost) => {
      worksheet.addRow(archivedPost);
    });
  } else {
    toast.error("Något gick fel");
    return;
  }
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  workbook.xlsx.writeBuffer().then((buffer) => {
    saveAs(new Blob([buffer]), `AterbrukslabbetArkiveradeInlagg.xlsx`);
  });

  return toast.success("Arkiverade annonser exporterade");
};

export default function ExportArchivesButton() {
  return (
    <Button className="w-fit" onClick={onExport}>
      Exportera
    </Button>
  );
}

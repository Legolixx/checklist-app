import React from "react";
import { Construction } from "lucide-react";
import UploadPlanilha from "@/components/upload/Upload_rev_plan";

function RevPlanejadas() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)] text-center p-4">
      <div className="mt-8 w-full">
        <UploadPlanilha />
      </div>
    </div>
  );
}

export default RevPlanejadas;

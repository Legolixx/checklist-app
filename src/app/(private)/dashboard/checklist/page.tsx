"use client"

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";

type Checklist = {
  id: string;
  clientName: string;
  clientEmail: string;
  vehicleBrand: string;
  vehicleName: string;
  createdAt: string;
  userName: string;
  createdByName:string;
};

const ITEMS_PER_PAGE = 10;

export default function ChecklistsTable() {
  const [checklists, setChecklists] = useState<Checklist[]>([]);
  const [filteredChecklists, setFilteredChecklists] = useState<Checklist[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchChecklists() {
      try {
        const response = await fetch("/api/checklists");
        
        if (!response.ok) {
          throw new Error("Failed to fetch checklists");
        }
        
        const data = await response.json();
         

        console.log(data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const checklistsData = data.map((checklist: any) => ({
          id: checklist.xata_id,
          clientName: checklist.client.nome,
          clientEmail: checklist.client.email,
          vehicleBrand: checklist.vehicle.marca,
          vehicleName: checklist.vehicle.modelo,
          createdAt: checklist.xata_createdat,
          userName: checklist.createdByName
        }));
        
        setChecklists(checklistsData);
        setFilteredChecklists(checklistsData);
      } catch (error) {
        console.error("Error fetching checklists:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch checklists");
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchChecklists();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredChecklists(checklists);
      return;
    }
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = checklists.filter(
      (checklist) =>
        checklist.clientName.toLowerCase().includes(lowerCaseSearchTerm) ||
        checklist.clientEmail.toLowerCase().includes(lowerCaseSearchTerm) ||
        checklist.vehicleBrand.toLowerCase().includes(lowerCaseSearchTerm) ||
        checklist.vehicleName.toLowerCase().includes(lowerCaseSearchTerm) ||
        checklist.userName.toLowerCase().includes(lowerCaseSearchTerm)
    );
    
    setFilteredChecklists(filtered);
  }, [searchTerm, checklists]);

  // Função para mudar de página
  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Calcular as checklists a serem exibidas na página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedChecklists = filteredChecklists.slice(startIndex, endIndex);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Spinner /> {/* Spinner de carregamento */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        Error: {error}
      </div>
    );
  }

  const totalPages = Math.ceil(filteredChecklists.length / ITEMS_PER_PAGE);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">All Checklists</CardTitle>
        
        {/* Botão para criar novo checklist */}
        <div className="mt-4">
          <Button variant="ghost" asChild>
            <a href="/dashboard/checklist/create">Create New Checklist</a>
          </Button>
        </div>
        
        <div className="mt-4">
          <Input
            placeholder="Search by client, vehicle, or user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>
      </CardHeader>
      <CardContent>
        {filteredChecklists.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No checklists found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Created By</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedChecklists.map((checklist) => (
                  <TableRow key={checklist.id}>
                    <TableCell>
                      <div className="font-medium">{checklist.clientName}</div>
                      <div className="text-sm text-gray-500">{checklist.clientEmail}</div>
                    </TableCell>
                    <TableCell>
                      <div>{checklist.vehicleBrand}</div>
                      <div className="text-sm text-gray-500">{checklist.vehicleName}</div>
                    </TableCell>
                    <TableCell className="uppercase">{checklist.userName}</TableCell>
                    <TableCell>
                      {new Date(checklist.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`/admin/checklists/${checklist.id}`}>View Details</a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Paginação */}
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="mx-2">{currentPage}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

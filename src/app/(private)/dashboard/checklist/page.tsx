/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import { Plus, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checklist = {
  id: string;
  clientName: string;
  clientEmail: string;
  vehicleBrand: string;
  vehicleName: string;
  createdAt: string;
  userName: string;
  createdByName: string;
};

const ITEMS_PER_PAGE = 10;

function transformChecklist(data: any): Checklist {
  return {
    id: data.xata_id,
    clientName: data.client.nome,
    clientEmail: data.client.email,
    vehicleBrand: data.vehicle.marca,
    vehicleName: data.vehicle.modelo,
    createdAt: data.xata_createdat,
    userName: data.createdByName,
    createdByName: data.createdByName,
  };
}

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
        if (!response.ok) throw new Error("Failed to fetch checklists");

        const data = await response.json();
        const checklistsData = data.map(transformChecklist);

        setChecklists(checklistsData);
        setFilteredChecklists(checklistsData);
      } catch (error) {
        console.error("Error fetching checklists:", error);
        setError(error instanceof Error ? error.message : "Erro desconhecido");
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

    const lower = searchTerm.toLowerCase();
    const filtered = checklists.filter(
      (c) =>
        c.clientName.toLowerCase().includes(lower) ||
        c.clientEmail.toLowerCase().includes(lower) ||
        c.vehicleBrand.toLowerCase().includes(lower) ||
        c.vehicleName.toLowerCase().includes(lower) ||
        c.userName.toLowerCase().includes(lower)
    );

    setFilteredChecklists(filtered);
  }, [searchTerm, checklists]);

  const totalPages = Math.ceil(filteredChecklists.length / ITEMS_PER_PAGE);

  const changePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedChecklists = filteredChecklists.slice(startIndex, endIndex);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/checklists/delete/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Erro ao deletar checklist");

      setChecklists((prev) => prev.filter((c) => c.id !== id));
      setFilteredChecklists((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Erro ao deletar checklist.");
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="bg-red-50 text-red-600 p-4 rounded-md">Error: {error}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Todos Checklists</CardTitle>
        <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
          <Input
            placeholder="Buscar por cliente, veículo, ou usuário..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
          <Button variant="default" asChild>
            <a href="/dashboard/checklist/create">
              Novo Check-list <Plus className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {filteredChecklists.length === 0 ? (
          <div className="text-center py-10 text-gray-500">Nenhum checklist encontrado.</div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Veículo</TableHead>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Ações</TableHead>
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
                    <TableCell>{new Date(checklist.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <a href={`/admin/checklists/${checklist.id}`}>Ver detalhes</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDelete(checklist.id)}
                          >
                            Deletar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Paginação */}
            <div className="mt-4 flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </Button>
              <span className="text-sm">{`Página ${currentPage} de ${totalPages}`}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Próxima
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

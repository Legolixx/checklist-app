/* eslint-disable @typescript-eslint/no-explicit-any */
import { columns } from "./usertable/columns";
import { DataTable } from "./usertable/data-table";
import React from "react";
import CreateUser from "./CreateUser";

async function UsersPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL2 ?? ""}/api/users`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }
  );

  const users = await res.json();

  const tableData = users.map((u: any) => ({
    id: u.id,
    name: `${u.firstName ?? ""} ${u.lastName ?? ""}`,
    email: u.emailAddresses?.[0]?.emailAddress ?? "—",
    lastSignIn: u.lastSignInAt
      ? new Date(u.lastSignInAt).toLocaleString()
      : "Nunca",
    imageUrl: u.imageUrl ?? u._raw?.profile_image_url ?? "",
    status: u.banned ? "Desativado" : u.locked ? "Bloqueado" : "Ativo",
  }));

  return (
    <div className="container mx-auto py-10">
      <div className="flex w-full justify-end mb-4">
        <CreateUser />
      </div>
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

export default UsersPage;

async function checkForDirectoryPermission(
  permissionName: string,
  path: string,
) {
  const p = { name: permissionName, path } as Deno.PermissionDescriptor;
  const query = await Deno.permissions.query(p);
  return query;
}

async function main() {
  const canReadCodingFolder = await checkForDirectoryPermission(
    "read",
    "/Users/tiagocampos/Coding",
  );
  console.log(canReadCodingFolder);
}

await main();

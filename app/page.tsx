import { executeMany, IUser } from '@utils/database';

async function getUsers() {
  const users = await executeMany<IUser>('SELECT * FROM user', []);
  return users;
}

export default async function RootPage() {
  const users = await getUsers();

  return (
    <>
      <header className="bg-blue-500 text-white text-center p-4">
        <h1 className="text-2xl font-bold">NextJS Template</h1>
      </header>
      <main className="container mx-auto p-4 grid gap-1">
        <section>
          <h3 className="text-2xl font-bold">This is a template for NextJS projects.</h3>
          <p>It includes a basic layout, a basic head, and a basic page. Also included is a basic 404 page.</p>
        </section>
        {users && (
          <section>
            <h3 className="text-2xl font-bold">Users</h3>
            <ol className="grid grid-cols-1 gap-1 list-decimal pl-4">
              {users.map((user) => (
                <li key={user.id}>{user.email}</li>
              ))}
            </ol>
          </section>
        )}
      </main>
    </>
  );
}

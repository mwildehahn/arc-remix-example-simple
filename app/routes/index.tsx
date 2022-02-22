import { useLoaderData, json } from "remix";
import type { LoaderFunction, MetaFunction } from "remix";
import { getUserId } from "~/sessions.server";

type Data = {
  resources: {
    name: string;
    url: string;
  }[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  console.log({ userId });

  const data = {
    resources: [
      {
        name: "Testing This",
        url: "https://remix.run/docs",
      },
      {
        name: "Architect Docs",
        url: "https://arc.codes",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
  };

  return json(data);
};

export const meta: MetaFunction = () => {
  return {
    title: "Architect + Remix Starter",
    description: "Welcome to remix",
  };
};

export default function Index() {
  const data = useLoaderData<Data>();

  return (
    <div className="remix__page">
      <main>
        <h1>Welcome to Remix!</h1>
        <h2>Running on Architect</h2>
        <p>We're stoked that you're here. 🥳</p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you're used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </p>
        <section>
          <h3>Resources</h3>
          <ul>
            {data.resources.map((resource) => (
              <li key={resource.url} className="remix__page__resource">
                <a href={resource.url}>{resource.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

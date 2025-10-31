import Image from "next/image";
import Navbar from "../../../components/Navbar";
import SearchForm from "../../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query

  const posts = [
    {
      _id : 1,
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1 , name : "Chen Myae" },
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1617972882594-b1b094574749?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      category: "Nature",
      title: "Health and Wellness",
    }
  ]
  return (
    <>
      <section className="pink_container  ">
        <h1 className="text-2xl heading">Pitch Your Startup,<br />Connect With Entrepreneurs</h1>
        <p className="sub-heading max-w-3xl!">
          Submit Ideas, Vote on Pitches, and Get Noticed in VIrtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search result for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ?
            (posts.map((post: StrartUpTypeCard, index: number) => (
              <StartupCard key={index} post={post} />
            )))
            :
            (
              <p className="no-results">No Startups found</p>
            )}
        </ul>
      </section>
    </>
  );
}

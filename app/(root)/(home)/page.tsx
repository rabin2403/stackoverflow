import QuestionCard from "@/components/cards/QuestionCard";
import NotFound from "@/components/common/NotFound";
import HomePageFilter from "@/components/filters/HomePageFilter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Tags from "@/components/shared/tags/Tags";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

export default async function Home() {
  // const popular = [
  //   { title: "Nextjs", posts: 45 },
  //   { title: "Nextjs", posts: 45 },
  //   { title: "Nextjs", posts: 45 },
  //   { title: "Nextjs", posts: 45 },
  // ];

  // const dummyData = [
  //   {
  //     title: "Best practices for data fetching in a Next.js application",
  //     tags: ["Nextjs", "Reactjs"],
  //     image: "/assets/images/default-logo.svg",
  //     user: "Sujata | JS Mastery",
  //     publishAt: "2019-05-22",
  //     like: "65",
  //     answers: "55",
  //     views: "333",
  //   },
  //   {
  //     title: "Redux Toolkit Not Updating State as Expected",
  //     tags: ["Nextjs", "Reactjs"],
  //     image: "/assets/images/default-logo.svg",
  //     user: "Sujata | JS Mastery",
  //     publishAt: "2022-05-22",
  //     like: "65",
  //     answers: "55",
  //     views: "333",
  //   },
  //   {
  //     title: "Async/Await Function Not Handling Errors Properly",
  //     tags: ["Nextjs", "Reactjs"],
  //     image: "/assets/images/default-logo.svg",
  //     user: "Sujata | JS Mastery",
  //     publishAt: "2023-05-22",
  //     like: "65",
  //     answers: "55",
  //     views: "333",
  //   },
  //   {
  //     title: "How do ES6 module exports and imports work in ",
  //     tags: ["Nextjs", "Reactjs"],
  //     image: "/assets/images/default-logo.svg",
  //     user: "Sujata | JS Mastery",
  //     publishAt: "2014-09-22",
  //     like: "65",
  //     answers: "55",
  //     views: "333",
  //   },
  //   {
  //     title: "How to Perfectly Center a Div with Tailwind CSS?",
  //     tags: ["Nextjs", "Reactjs"],
  //     image: "/assets/images/default-logo.svg",
  //     user: "Sujata | JS Mastery",
  //     publishAt: "2014-05-22",
  //     like: "65",
  //     answers: "55",
  //     views: "333",
  //   },
  // ];

  const result : any = await getQuestions({});

  // const questions =  [
  //   {
  //     _id: "1",
  //     title: "Cascading Deletes in Sql",
  //     tags: [
  //       { _id: "1", name: "python" },
  //       { _id: "2", name: "sql" },
  //     ],
  //     author: {
  //       _id: "authorId1",
  //       name: "John Doe",
  //       picture: "url/to/picture1",
  //     },
  //     upvotes: 100000,
  //     views: 1000000,
  //     answers: [],
  //     createdAt: new Date("2021-09-01T12:00:00.000Z"),
  //   },
  //   {
  //     _id: "2",
  //     title: "Another Question",
  //     tags: [
  //       { _id: "3", name: "javascript" },
  //       { _id: "4", name: "html" },
  //     ],
  //     author: {
  //       _id: "authorId2",
  //       name: "Jane Doe",
  //       picture: "url/to/picture2",
  //     },
  //     upvotes: 15,
  //     views: 150,
  //     answers: [],
  //     createdAt: new Date("2021-09-02T12:30:00.000Z"),
  //   },
  // ];;

  // console.log(result.questions[0].tags);

  // const dummyData :any=[]

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row ">
        <h1 className="h1-bold text-dark100_light900 ">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient px-4 py-3 !text-light-900 min-h-[46px] ">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex md:flex-row flex-col justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch />
        <HomePageFilter />
      </div>

      <div className="hidden flex-wrap mt-4 gap-4 md:flex lg:inline-flex">
        {HomePageFilters.map((item, idx) => (
          <Link href={item.value} key={idx}>
            <Tags title={item.name} classNames="" />
          </Link>
        ))}
      </div>

      <div className="py-10 space-y-10">
        {result.questions.length > 0 ? (
          result.questions.map((item : any) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
              answers={item.answers}
              createdAt={item.createdAt}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
      {/* <div className="py-10 space-y-10">
        {dummyData.length > 0 ? (
          dummyData.map((item: any, idx: any) => (
            <QuestionCard
              key={idx}
              title={item.title}
              tags={item.tags}
              user={item.user}
              image={item.image}
              publishAt={item.publishAt}
              vote={item.like}
              answers={item.answers}
              views={item.views}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div> */}
    </>
  );
}

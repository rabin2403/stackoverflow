
import { formatLargeNumber, getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Metric from "../main/Metric";
import Tags from "../shared/tags/Tags";

interface QuestionTypes {
  _id: string;
  title: String;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

// Commented for fixing error

// function calculateTimeAgo(inputDate: string): string {
//   // Convert the input date to a JavaScript Date object
//   const dateObject = new Date(inputDate);

//   // Get the current date
//   const currentDate = new Date();

//   // Calculate the difference in milliseconds
//   const timeDifference = currentDate.getTime() - dateObject.getTime();

//   // Calculate the difference in days
//   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   if (daysDifference > 365) {
//     // Calculate the difference in years
//     const yearsDifference = Math.floor(daysDifference / 365);
//     return (
//       yearsDifference + (yearsDifference === 1 ? " year ago" : " years ago")
//     );
//   } else if (daysDifference > 30) {
//     // Calculate the difference in months
//     const monthsDifference = Math.floor(daysDifference / 30);
//     return (
//       monthsDifference + (monthsDifference === 1 ? " month ago" : " months ago")
//     );
//   } else {
//     return daysDifference + (daysDifference === 1 ? " day ago" : " days ago");
//   }
// }

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionTypes) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex felx-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1 ">
              {title}
            </h3>
          </Link>
        </div>
        {/* if singed in add edit delete actions  */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Tags key={i} title={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="User"
          value={author.name}
          title={` - asked ${getTimeStamp(createdAt)}`}
          href={`/profile/${author._id}`}
          textStyles="body-medium text-dark_light800"
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatLargeNumber(upvotes)}
          title="Votes"
          textStyles="small-medium text-dark_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="Message"
          value={formatLargeNumber(answers.length)}
          title="Answers"
          textStyles="small-medium text-dark_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatLargeNumber(views)}
          title="views"
          textStyles="small-medium text-dark_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;

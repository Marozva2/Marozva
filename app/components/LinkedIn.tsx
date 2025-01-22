import Link from "next/link";
const LinkedInButton: React.FC = () => {
  return (
    <div className="text-center mt-5">
      <Link
        className="flex justify-center items-center py-2 text-white text-sm font-bold rounded-full bg-blue-700 hover:bg-blue-800 duration-300"
        href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=frankline-isaboke-68460428b"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow on LinkedIn
      </Link>
    </div>
  );
};

export default LinkedInButton;

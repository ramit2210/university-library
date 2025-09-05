import { Button } from "../../components/ui/button";
import BookOverview from "../../components/BookOverview.tsx";
import BookList from "../../components/BookList.tsx";

export default function Home() {
  return (
    <>
      <BookOverview />
      <BookList />
    </>
  );
}

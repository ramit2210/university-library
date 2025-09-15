import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export default async function Home() {
    const result = await db.select().from(users);
    console.log(JSON.stringify(result, null, 2));
    return (
        <>
            <BookOverview {...sampleBooks[0]} />
            <BookList
                title="Latest Books"
                books={sampleBooks}
                containerClassName="mt-28"
            />
        </>
    );
}

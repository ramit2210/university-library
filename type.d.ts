type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    color: string;
    coverUrl: string;
    vedio: string;
    summary: string;
    isLoanedBook?: boolean;
};

type AuthCredentials = {
    fullName: string;
    email: string;
    password: string;
    universityId: number;
    universityCard: string;
};

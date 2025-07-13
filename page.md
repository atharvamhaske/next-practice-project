export async function fetchUser(): Promise<User[]> {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
        return users;

    } catch (error) {
        console.error("failed to fetch users", error);
        throw new Error("failed to fetch users from db)

    }
}

export async function POST(req: NextRequest){
    try {
         const body = await req.json()

         //validations 

         if(!body.emaill || !body.name) {
            return NextResponse.json({
                success: false,
                error: "email and name are the required fields to enter in the app"  
            },
            {status: 400})
         }

         db.insert(users).values({
            name: body.name // 
         })


    } catch(error) {

    }
}


model User {
    id String @id @default(cuid())
    name String
    email String @unique
    posts Post[]
    profile Profile?
    orders Order[]
}

model Profile {
    id String @id @default(cuid())
    bio String
    avatar String?
    userId String @unique
    user User @relation(fields: [userId], references: [id], onDelete : Cascade) // so here userId is the foreign key and id is the primary key of the user table they are related to each other
}
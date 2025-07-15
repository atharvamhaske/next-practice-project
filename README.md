This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



aggregation pipelines practice 

if we have to find the users whoose age is gt than 25 

db.users.aggregate([
    { $match: {age: {$gt: 25} } }
])

//multiple condition we have to check if task is complete and report is sent 

db.orders.aggregate([
    { 
        $match : {
            statusofTask: "completed"
            reportStatus: "already sent"
        }
    }
])

const mongoose = require('mongoose')
const bcrypt  = require("bcryptjs")

const userSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }

});

userSchema.pre("save", async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcryt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model("User", userSchema);


middleware in expressjs

app.use((req, res, next) => {
    console.log("time:", Date.now());
    next(); //passes control to next middleware
})

//apply to custom routes

app.use("/users", (req, res, next) => {

    console.log("users route it is");
    next();
    
})

context api practice 

const ThemeContext = createContext({
    theme: "light",
    toggletheme: () => {}
});

export default ThemeContext // this is code where we create a context

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'white')
    }

    const value = {
        theme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>
              {children}
        </ThemeContext.Provider>
    )
}

function focusInput(){
         const inputRef = useRef(null)
}

const handleClick = () = {
    inputRef.current.focus();
}


return (
    div 
    input 
)

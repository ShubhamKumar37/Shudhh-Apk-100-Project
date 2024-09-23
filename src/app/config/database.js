const mongoose = require("mongoose");

export async function dbConnect()
{
    try{
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        const connection = mongoose.connection;

        connection.on("connected", () =>
        {
            console.log("Database is connected successfully ");
        });

        connection.on("error", (Error) =>
        {
            console.log("Make sure that the database is up ");
            console.log("This is the error of not running database ->", Error);
            process.exit(1);
        });

        connection.on("disconnected", () =>
        {
            console.log("Database is disconnected");
        });

        process.on("SIGINT", () =>
        {
            connection.close();
            process.exit(0);
        });
    }
    catch(Error)
    {
        console.log("DB is not connected");
        console.log("This is the error for no connected with database = ", Error);
    }
}
